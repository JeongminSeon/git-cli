# 🧪 Git CLI クローンプロジェクト

> Gitの内部動作を理解し、CLIベースのツール開発スキルを高めるための学習プロジェクトです。

---

## ✨ プロジェクト概要

Gitのコマンドが内部的にどのように動作しているかを探求することを目的に始めたプロジェクトです。  
以下の3つのリファレンスを中心に学習しながら実装を進めています：

- [Git Pro公式ドキュメント](https://git-scm.com/book/en/v2)  
- [Qiita: Git内部構造の解説記事](https://qiita.com/marchin_1989/items/2ec01553e907f3a9e6bb)  
- [YouTube: Gitをゼロから実装する講座](https://www.youtube.com/watch?v=eOLuvsRgBCo)

特に、技術ドキュメントや参考資料の多くが英語や日本語で提供されているため、  
**多言語ドキュメントの読解力と活用能力の向上**も本プロジェクトの重要な目的の一つです。

---

## 🔧 技術スタック

- Node.js（ESMベース）  
- TypeScript  
- File System API（fs/promises）  
- Crypto（SHA-1ハッシュ生成）  
- コマンドラインインターフェース（CLI）

---

## 📁 ディレクトリ構造（例）

```bash
.mygit/
├── HEAD                     # 現在のブランチを指すポインタ
├── refs/heads/master        # masterブランチの参照先コミット
├── objects/                 # blob、commitオブジェクトの格納場所
│   └── 2b/51f32e6...        # SHA-1で保存されたオブジェクト
├── index                    # ステージングエリアの情報
```

---

## 🔨 実装状況

### ✅ 実装済み

- `git init`
  - `.mygit/`ディレクトリを作成し、初期構造（HEAD、refs、objectsなど）を構築
- `git add .`
  - 作業ディレクトリを再帰的に探索し、blobオブジェクトを生成・保存
  - `.gitignore`に記載されたファイルは除外
  - `.mygit/index`にファイルパスとblobハッシュを保存

### 🔜 実装予定

- `git commit`  
  - ステージングされたblob情報を元にtree・commitオブジェクトを生成  
  - コミット間の親子関係を構築

---

## 📌 主な学習ポイント・技術的な工夫

- 📁 `fs.readdir`、`fs.readFile` を用いたファイル探索とblob保存  
- 🧩 TypeScriptモジュールの `import * as mod` による読み込み方法  
- 📦 ESMとCommonJSの違いと実装への影響  
- 🧠 エラー処理の責任範囲と構造設計の検討  
- 🗂️ Gitのindexファイルの役割と構造の理解  

---

## 💡 プロジェクトの目的

- Gitの内部動作を自ら実装することで、根本的な理解を深める  
- CLIツール開発を通じて、ファイルシステム・引数処理・ハッシュ処理などの基礎技術を習得  
- 英語・日本語などの多言語技術ドキュメントを正確に理解し、応用する力を養成

---

## 🚀 実行方法

```bash
npm install -g .
mygit init
mygit add .
```

> `package.json` の bin 設定で `mygit` コマンドを登録  
---

## 📝 TODOリスト

- [ ] `commit` コマンドの実装  
- [ ] `log`、`status` などの補助機能の拡張  
- [ ] テストコードの作成およびリファクタリング
