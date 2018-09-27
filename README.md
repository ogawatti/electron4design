## 概要

テストしやすい作りにするにはWindowをどう作るのがいいかの実験リポジトリ。   
ウィンドウに対してMockを食わせることで振る舞いをテストできるそう。

## 方針

* windowに対して単体テストができるようにする
    * electronに関わるものは自身では持たないようにする
* electronを利用する(ブラウジングする)テストはspectronで行う

## 使い方

```
$ npm start         # アプリの起動
$ npm run spec      # 単体テスト実行
$ npm run functest  # Spectronによる機能テスト実行
$ npm test          # 全テスト実行
```
