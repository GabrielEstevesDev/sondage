$().ready(init);

var categories;
var nbVal = 0;
var maxi;

function init() {
    getCategories();
    maxi = getMax();
    setPercent();
    anim();
}

function getCategories() {
    url = "./modele/recupCategoriesSQL.php";
    $.ajax({
        async: false, //défaut
        type: "GET",
        url: url,
        dataType : "json",
        success: function (retour) {
          categories = retour;
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error(textStatus, errorThrown);
        }
    });

    for (var i = 1; i < 12; i++) {
        nbVal = nbVal + categories[i];
    }
}

function getMax() {
    var max;
    for (var i=1 ; i<11 ; i++) {
        if (max == null || parseInt((categories[i]/nbVal)*100) > parseInt(max))
            max = (categories[i]/nbVal)*100;
    }
    return max;
}

function setPercent() {
    $("div.cat1").attr('data-percent', Math.round((categories[1]/nbVal)*100)+'%');
    $("div.cat2").attr('data-percent', Math.round((categories[2]/nbVal)*100)+'%');
    $("div.cat3").attr('data-percent', Math.round((categories[3]/nbVal)*100)+'%');
    $("div.cat4").attr('data-percent', Math.round((categories[4]/nbVal)*100)+'%');
    $("div.cat5").attr('data-percent', Math.round((categories[5]/nbVal)*100)+'%');
    $("div.cat6").attr('data-percent', Math.round((categories[6]/nbVal)*100)+'%');
    $("div.cat7").attr('data-percent', Math.round((categories[7]/nbVal)*100)+'%');
    $("div.cat8").attr('data-percent', Math.round((categories[8]/nbVal)*100)+'%');
    $("div.cat9").attr('data-percent', Math.round((categories[9]/nbVal)*100)+'%');
    $("div.cat10").attr('data-percent', Math.round((categories[10]/nbVal)*100)+'%');
    $("div.cat11").attr('data-percent', Math.round((categories[11]/nbVal)*100)+'%');
}

function anim() {
    setTimeout(function start (){

        $('.bar').each(function(i){  
            var $bar = $(this);
            $(this).append('<span class="count"></span>')
            setTimeout(function(){
                var val = parseInt($bar.attr('data-percent'));
                if(maxi >= 50 && maxi < 75)
                    val = val*1.5;
                else if(maxi >= 20 && maxi < 50)
                    val = val*2;
                else
                    val = val*2.5;
                $bar.css('width', val+'%');
          }, i*100);
        });

        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).parent('.bar').attr('data-percent')
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) +'%');
                }
            });
        });

    }, 500)
}
