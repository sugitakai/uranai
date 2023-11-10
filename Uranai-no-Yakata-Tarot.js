// $('.menu-btn').on('click', function(){
//     $('.menu').toggleClass('is-active');
//     });

//window.onButtonClick = function onButtonClick() { $("#Oracle").text(tarots);




$(function () {
    $("button").click(function () {

        var tarots = Math.floor(Math.random() * 43);
        console.log(tarots);
        var kekka = $('#kekka').get(0);     // var obj = $('#txt1').get(0);　ゲットエレメンタルIDの代用
        kekka.html = ("tarots");
        console.log(kekka);
        $("#kekka").html(`<img src='icooon-mono/tarot${tarots}.jpg' width='100' height='100'>`);
        console.log(tarots);
            if (tarots < 22) {
                $('#kekka').addClass('sei'); $('#kekka ').removeClass('gyaku');//  条件式が偽の場合に実行する。
            } else {
                $('#kekka ').addClass('gyaku');$('#kekka ').removeClass('sei');   //#kekka 条件式が真の場合に実行する。
            };
        });
    });

 var tarots={};
 console.log(tarots);
//var span = $(document.createElement('span'));  span.


