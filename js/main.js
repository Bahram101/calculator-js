$(function(){

    $('#addGreen').on('click', function(){
        $('#box').addClass('green')
    });

    $('#removeGreen').on('click', function(){
        $('#box').removeClass('green')
    });

    $('#toggleGreen').on('click', function(){
        $('#box').toggleClass('green');
    });

    $('#custom').on('click', function(){
        $('#box').toggleClass('border')
    });

    $('#hide').on('click', function(){
        $('#box').hide(1500)
    });
    $('#show').on('click', function(){
        $('#box').show(1500)
    });
    $('#hideS').on('click', function(){
        $('#box').hide(1000).delay(1500).show(1000);
    });
    $('#fadeH').on('click', function(){
        $('#box').fadeOut();
    });
    $('#fadeS').on('click', function(){
        $('#box').fadeIn(1000);
    });
    $('#fadeHS').on('click', function(){
        $('#box').fadeToggle(1000);
    });
    $('#slideH').on('click', function(){
        $('#box').slideUp(1000);
    });
    $('#slideS').on('click', function(){
        $('#box').slideDown(1000);
    });
    $('#slideHS').on('click', function(){
        $('#box').slideToggle(1000);
    });

    $('#box').on('mouseenter', function(){
       $(this).css('background', 'red');
    });

    /*$('#input').on('focus', function(){
       $(this).toggleClass('focus');
    });*/
   /* $('#input').on('keydown', function(){
        $(this).addClass('focus');
    });*/
    /*$('#input').on('blur', function(){
        $(this).removeClass('focus');
    });*/

    /*$('#input').on('keydown', function(){
        alert('changed');
    });*/
    /*$('#input').on('blur', function(){
        var val = $(this).val();
        $('#text').text(val);
    });*/
    $('#input').on('keyup', function(){
        $('#text').text($(this).val());
    });
    $('#input').on('keyup', function(e){
        if(e.which == 27){
            $('#text').text('');
            $(this).val('');
        }
    });

    $('#form').on('submit', function(e){
        e.preventDefault();
        let numberOne = parseInt($('#numberOne').val());
        let numberTwo = parseInt($('#numberTwo').val());

        if(isNaN(numberOne)){
            numberOne = 0;
        }
        if(isNaN(numberTwo)){
            numberTwo = 0;
        }

        let summ = numberOne + numberTwo;

        $('#result').text(summ);

    });




    $('.colorItem').on('click',function(){
        let $img = $('#imgHolder img');
        let imgPath = $(this).attr('data-path');
        $img.fadeOut(200, function(){
            $img.attr('src', imgPath).fadeIn(200);
        })
        /*img.fadeOut(200);
        img.attr('src', imgPath).fadeIn(200);*/

    });


    $('#testBox').text("<b>hello</b>");
    $('#testBox').html("<b>hello</b>");

    $newcontent = $('<h1>Заголовок</h1>' +
                     '<p>Абзац с текстом</p>'+
                     '<ul>'+
                        '<li>1</li>'+
                        '<li>2</li>'+
                        '<li>3</li>'+
                     '<ul>');

    /*$newcontent.hide();
    $('#testBox').html($newcontent);

    $('#testBox').on('click', function(){
        // $($newcontent).fadeIn();
        $($newcontent).fadeToggle();
        // $($newcontent).slideToggle();
    });*/

    $('#testBox').prepend('<p>Prepend</p>');
    $('#testBox').append('<p>Append</p>');
    $('#testBox').before('<b>Before</b>');
    $('#testBox').after('<h2>Before</h2>');
    $('#textNoWrap').wrap('<p class="redBorder">Wrapped lorem block</p>');
    $('#textInWrap').unwrap();
    $('#textInWrap').unwrap('.greenBorder');


    $('#testBox').on('click', function(){
        $cloned = $(this).clone();
        $cloned.addClass('cloned').text('Another text');
        // $cloned.text('Another text');
        $(this).after($cloned);


    });



});