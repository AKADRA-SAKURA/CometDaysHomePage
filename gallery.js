$(function() {
  $.when(
    $.getJSON("json/gallery.json" , function(data) {
      var
        Object = $("#GalleryContainer"),
        len = data.length,
        box = '<div class="box"><div class="swiper-container"><div class="swiper-wrapper" id="SwiperWrapper'
        boxafter = '"></div></div></div>';
      for(var i = 0; i < len; i++) {
        Object.append(box + data[i].id + boxafter);
        var photo2 = data[i].photo,
            len2 = photo2.length;
        for(var j = 0; j < len2; j++) {
          $("#SwiperWrapper" + data[i].id).append($('<div class="swiper-slide"><img src="' + data[i].photo[j] + '" width="200" height="200" alt="" title="' +data[i].name+ '"></div>'));
        }
      }
    }),
  ).done(function(){
    var mySwiper = new Swiper ('.swiper-container', {
      // オプションパラメータ(一部のみ抜粋)
      loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
      speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
      slidesPerView: 1, // 何枚のスライドを表示するか
      spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
      direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
      effect: 'coverflow', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
      
      // スライダーの自動再生
      // autoplay: true 　のみなら既定値での自動再生
      autoplay: {
      delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: false // ユーザーのスワイプ操作を検出したら自動再生を中止するか
      },
      
      // レスポンシブ化条件
      breakpoints: {
      // 980ピクセル幅以下になったら
      980: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // 640ピクセル幅以下になったら
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      }
      },
      });
  }).fail(function(){
      alert("Error");
  });

});


