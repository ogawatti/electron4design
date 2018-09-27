## 概要

テストしやすい作りにするにはウィンドウをどう作るのがいいかの実験リポジトリ。   
主にクラスの分割とテスト方法を考える。

## 方針

* electronアプリに関わる部分は `main.js` に持たせる
* ウィンドウに対してMockを食わせることでテスト可能にする
* electronを利用する部分のテストはspectronで行う
    * BrowserWindow, ipc, view等やその結合

## 使い方

```
$ npm start         # アプリの起動
$ npm run spec      # 単体テスト実行
$ npm run functest  # Spectronによる機能テスト実行
$ npm test          # 全テスト実行
```
