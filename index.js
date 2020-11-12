$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

$(window).on('load resize', function(){
    // navbarの高さを取得する
    var height = $('.navbar').height();
    // bodyのpaddingにnavbarんぼ高さを設定する
    $('body').css('padding-top',height); 
});