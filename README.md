## Zenn

https://zenn.dev/nihashi/articles/4db670877ee5fe

## これはなに

モーダル表示+背面スクロール抑制の各実装方法の挙動を確認するためのリポジトリです。

## 確認URL

https://ios-prevent-scroll-nihashi000s-projects.vercel.app/

### 挙動を確認できる実装方法

2024-09-07現在

- &lt;body&gt;要素にoverflow: hidden
- &lt;html&gt;要素と&lt;body&gt;要素にoverflow: hidden
- position: fixed + 直前のスクロール位置の取得＆抑制終了時に反映
- react-remove-scroll
