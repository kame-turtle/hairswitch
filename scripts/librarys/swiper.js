'use strict';

let mySwiper = new Swiper('.swiper-container', {
  // 以下,オプション設定
  loop: true,   //最後に達したら先頭に戻る
  speed: 1000,  //スライド遷移にかける時間(ms)
  autoplay: {   //自動再生したい場合の基本設定
    delay: 3000,  //スライド切替間隔(ms)
    disableOnInteraction: true  //クリック、ドラッグされたら自動再生を無効にする
  },
  effect: 'coverflow',  //スライドのエフェクトを coverflow に

  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },

  //スクロールバー表示の設定
  scrollbar: {
    el: '.swiper-scrollbar', //要素の指定
  },

  slidesPerView:1,  //スライドを2つ（分）表示
  centeredSlides : true,  //アクティブなスライドを中央に表示
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 1,
    },
    // 980px以上の場合
    980: {
      slidesPerView: 2,
    },
  }
})

console.log('test')
