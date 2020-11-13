# hairswitch

ポリシー
1) モバイルファースト
2) jQueryは使わずに実装
3) クラス設計はBEM（厳密にはちょっと違ってくるかも）


実装の流れ


1. reset.cssの導入（デフォルトスタイルを初期化）


2. ウェブフォントの導入（ブラウザ間のフォント差異を並列化）
    1) 導入はベースになるスタイルで読み込む
    2) 不要なフォントは導入しない
    3) ローマ字フォントから優先して読み込む


3. レスポンシブ対応のスタイルシート設定
    ・初期ファイル作成(scssファイル)
    ・メディアクエリの設定
    ・px,color指定用に「_variables.scss」を作成

    <!-- ※pathの設定やファイル配置は要確認 -->
    <!-- ※pathの設定やファイル配置は要確認 -->
    <!-- ※pathの設定やファイル配置は要確認 -->


4. デザイン統一用クラスの定義
    1) フォント専用のクラスを定義する
    2) margin,padding専用のクラスを定義する
    3) 要素の幅と余白を調整するクラスを定義する


5. ハンバーガーメニューの実装(モバイルメニュー)
    1) htmlファイルにモバイル用のロゴ,ナビメニュー,ボタン用のspan要素を追加
    2) JSは使わない方向で


6. スライダーの実装(swiper APIを使用)
    1) swiperのcss,jsファイルのテンプレートを読み込み
    2) JSファイルで各種オプションの設定


