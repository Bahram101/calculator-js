$(function(){

    /*$('.colorItem').on('click',function(){
        $('#imgHolder img');
        let imgPath = $(this).attr('data-path');
        $img.fadeOut(200, function(){
            $img.attr('src', imgPath).fadeIn(200);
        });

    });*/

    $('.colorItem').on('click',function(){
        let imgPath = $(this).attr('data-path');
        $('#imgHolder img').attr('src', imgPath).fadeOut(200).fadeIn(200);
    });


    let modelSpecsHolder = $('#modelSpecs');
    let modelPriceHolder = $('#modelPrice');
    let modelPriceUSDHolder = $('#modelPriceUSD');
    let modelSpecs = '';
    let modelPrice = 0;


    compileSpecs();
    calculatePrice();

    $('#autoForm input').on('change', function(){
        compileSpecs();
        calculatePrice();
        calculateUSD();
    });



    function compileSpecs(){
        modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text() + "\n";
        modelSpecs = modelSpecs + " / " + $('input[name=transmission]:checked + label', '#autoForm').text();
        modelSpecs = modelSpecs + " / " + $('input[name=package]:checked + label', '#autoForm').text();
        modelSpecsHolder.text(modelSpecs);
    }

    function calculatePrice(){
        modelPriceEngine = parseInt($('input[name=engine]:checked', '#autoForm').val());
        modelPriceTransmission = parseInt($('input[name=transmission]:checked', '#autoForm').val());
        modelPricePackage = parseInt($('input[name=package]:checked', '#autoForm').val());
        modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;
        modelPriceHolder.text(modelPrice + " руб");
    }

    let currencyUrl = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=RUB';

    let rurUsdRate = 0;
    $.ajax({
        url: currencyUrl,
        cache: false,
        success: function (obj) {
            rurUsdRate = obj.rates.RUB;
            calculateUSD();
        }
    });

    function calculateUSD(){
        let modelPriceUsd = modelPrice / rurUsdRate;
        modelPriceUSDHolder.text('$ ' + modelPriceUsd.toFixed());
    }


});