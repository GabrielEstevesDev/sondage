$().ready(init);
var uId;
var choix;
var preferences;
var nbVal = 0;
var nutriscore;
var scoresante;

function init() {
  getChoix();
  afficherChoix();
  getScores();
  afficherScores();
  getPref();
  setSpanPoll();
  createPieCharts();
  getCategories();
  maxi = getMax();
  setPercent();
  anim();
  setTimeout(printPdf, 1500);
}
function getId() {
  url = "./index.php?controle=utilisateur&action=getId";
  $.ajax({
    async: false, //défaut
    type: "GET",
    url: url,
    success: function (retour) {
      uId = retour;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    },
  });
}
function getScores() {
  getId();
  url = "../modele/recupScoresSQL.php";
  $.ajax({
    async: false, //défaut
    type: "GET",
    data: { id: "10" },
    url: url,
    dataType: "json",
    success: function (retour) {
      console.log(retour);
      nutriscore = retour["nutriscore"];
      scoresante = retour["scoresante"];
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    },
  });
}

function afficherScores() {
  $(".nutriscore").text("Votre nutriscore : " + nutriscore);
  $(".scoresante").text("Votre score santé : " + scoresante);
}

function getChoix() {
  getId();
  url = "../modele/recupChoixSQL.php";
  $.ajax({
    async: false, //défaut
    type: "GET",
    data: { id: "10" },
    url: url,
    dataType: "json",
    success: function (retour) {
      choix = retour;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      //console.error(textStatus, errorThrown);
    },
  });
}

function afficherChoix() {
  for (var i = 0; i < 10; i++) {
    $("p.alim" + (i + 1)).text(choix[i]["alim_nom_fr"]);
  }
}

function getPref() {
  getId();
  url = "../modele/recupSondageSQL.php";
  $.ajax({
    async: false, //défaut
    type: "GET",
    data: { id: "10" },
    url: url,
    dataType: "json",
    success: function (retour) {
      preferences = retour;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    },
  });
}

function setSpanPoll() {
  $("span.bio").text(preferences["Bio"]);
  $("span.casher").text(preferences["Casher"]);
  $("span.halal").text(preferences["Halal"]);
  $("span.vegan").text(preferences["Vegan"]);
  $("span.autres").text(preferences["None"]);
}

function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}

function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append(
    "<div class='slice " + sliceID + "'><span></span></div>"
  );
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;

  $(id + " ." + sliceID).css({
    transform: "rotate(" + offset + "deg) translate3d(0,0,0)",
  });

  $(id + " ." + sliceID + " span").css({
    transform: "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
    "background-color": color,
  });
}

function iterateSlices(
  id,
  sliceSize,
  pieElement,
  offset,
  dataCount,
  sliceCount,
  color
) {
  var maxSize = 179,
    sliceID = "s" + dataCount + "-" + sliceCount;

  if (sliceSize <= maxSize) {
    addSlice(id, sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(id, maxSize, pieElement, offset, sliceID, color);
    iterateSlices(
      id,
      sliceSize - maxSize,
      pieElement,
      offset + maxSize,
      dataCount,
      sliceCount + 1,
      color
    );
  }
}

function createPie(id) {
  var listData = [],
    listTotal = 0,
    offset = 0,
    i = 0,
    pieElement = id + " .pie-chart__pie";
  dataElement = id + " .pie-chart__legend";

  color = [
    "cornflowerblue",
    "olivedrab",
    "orange",
    "tomato",
    "navy",
    "purple",
    "turquoise",
    "forestgreen",
    "crimson",
  ];

  color = shuffle(color);

  $(dataElement + " span").each(function () {
    listData.push(Number($(this).html()));
  });

  for (i = 0; i < listData.length; i++) {
    listTotal += listData[i];
  }

  for (i = 0; i < listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
    $(dataElement + " li:nth-child(" + (i + 1) + ")").css(
      "border-color",
      color[i]
    );
    offset += size;
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  return a;
}

function createPieCharts() {
  createPie(".pieID--micro-skills");
  createPie(".pieID--categories");
  createPie(".pieID--operations");
}
function getCategories() {
  url = "../modele/recupCategoriesSQL.php";
  $.ajax({
    async: false, //défaut
    type: "GET",
    url: url,
    dataType: "json",
    success: function (retour) {
      categories = retour;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error(textStatus, errorThrown);
    },
  });

  for (var i = 1; i < 12; i++) {
    nbVal = nbVal + categories[i];
  }
}

function getMax() {
  var max;
  for (var i = 1; i < 11; i++) {
    if (max == null || parseInt((categories[i] / nbVal) * 100) > parseInt(max))
      max = (categories[i] / nbVal) * 100;
  }

  return max;
}

function setPercent() {
  for (var i = 1; i < 12; i++) {
    $("div.cat" + i).attr(
      "data-percent",
      Math.round((categories[i] / nbVal) * 100) + "%"
    );
  }
}

function anim() {
  setTimeout(function start() {
    $(".bar").each(function (i) {
      var $bar = $(this);
      $(this).append('<span class="count"></span>');
      setTimeout(function () {
        var val = parseInt($bar.attr("data-percent"));
        if (maxi >= 75) val = val * 0.75;
        else if (maxi >= 50 && maxi < 75) val = val * 1.5;
        else if (maxi >= 20 && maxi < 50) val = val * 2;
        else val = val * 2.5;
        $bar.css("width", val + "%");
      }, 0);
    });

    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).parent(".bar").attr("data-percent"),
          },
          {
            duration: 0,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now) + "%");
            },
          }
        );
    });
  }, 0);
}

function printPdf() {
  window.print();
}
