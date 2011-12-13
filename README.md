[jquery.utility.js](https://github.com/haldais/jquery.utility.js) - jQuery plugin 
==================================================

目次
--------------------------------------

1. 概要
2. ダウンロード
3. 機能群
  * rollOverImages
  * imgFade
  * boxSameHeight
  * anchorScroll  

概要
--------------------------------------
jquery.utility.jsはHTML、CSSコーディングを補助するjQueryのプラグインです。

ダウンロード
--------------------------------------
URL:[https://github.com/haldais/jquery.utility.js](https://github.com/haldais/jquery.utility.js)

概要
--------------------------------------

###rollOverImages###

任意のクラス名をimg要素に付与することでマウスオーバー時の画像を切替ます。デフォルトはマウスオーバー時にimgのsrc属性に指定された画像のファイル名を '_over' がついたもの切替ます。

####用例####

#####通常#####

    $ $('img.swap').rollOverImages();
   
#####オプション#####

    $ $('img.swap').rollOverImages({
    $     suffix : '_on' // imgのファイル名語尾を_onのものと入れ替える。
    $ });

###imgFade###

マウスオーバー時に画像を透過します。

####用例####

#####通常#####

    $ $('img.fade').imgFade();

#####オプション#####

    $ $('img.fade').imgFade({
    $     fadeSpeed  : 500, // 透過状態になるまでの秒数
    $     startAlpha : 0.3, // アルファ状態
    $     endAlpha   : 1.0  // 通常時
    $ });

###boxSameHeight###

ボックスの高さ揃え

####用例####

#####通常#####

    $ $('.SameHeight').boxSameHeight();

#####オプション#####

    $ $('.SameHeight').boxSameHeight({
    $     resize:true  //文字サイズ変更対応
    $ });

###anchorScroll###

ページ内リンクアニメーション(※要jquery.easing.js)

####用例####

#####通常#####

    $ $('a[href^="#"]').anchorScroll();

#####オプション#####

    $ $('a[href^="#"]').anchorScroll({
    $      duaration : 1000, //目標座標までの時間
    $      easing : 'easeIn' //アニメーションのイージング設定
    $ });
