# 🧪 Git CLI 클론 프로젝트

> Git 내부 동작을 이해하고 CLI 기반 툴 제작 역량을 기르기 위한 학습형 프로젝트입니다.

---

## ✨ 프로젝트 개요

Git 명령어가 내부적으로 어떤 방식으로 동작하는지 탐구하고자 시작한 프로젝트입니다.  
Git 공식 문서 및 다음 두 개의 레퍼런스를 중심으로 공부하며 구현을 병행하고 있습니다:

- [Git Pro 공식 문서](https://git-scm.com/book/en/v2)
- [Qiita: たぶんもう怖くないGit ~Git内部の仕組み](https://qiita.com/marchin_1989/items/2ec01553e907f3a9e6bb)
- [YouTube: たぶんもう怖くないGit](https://www.youtube.com/watch?v=eOLuvsRgBCo)

특히, 대부분의 기술 문서와 레퍼런스가 영어로 제공되기 때문에  
**영어 및 일본어 문서를 정확하게 이해하고 적용하는 능력 향상**도 본 프로젝트의 중요한 목표 중 하나입니다.

---

## 🔧 기술 스택

- Node.js (ESM 기반)
- TypeScript
- File System API (fs/promises)
- Crypto (SHA-1 해시 생성)
- Command Line Interface (CLI)

---

## 📁 디렉토리 구조 예시

```bash
.mygit/
├── HEAD                     # 현재 브랜치를 가리키는 포인터
├── refs/heads/master        # master 브랜치가 가리키는 커밋
├── objects/                 # blob, commit 객체 저장소
│   └── 2b/51f32e6...        # SHA-1로 저장된 객체들
├── index                    # Staging Area 역할
```

---

## 🔨 구현 현황

### ✅ 구현 완료

- `git init`
  - `.mygit/` 디렉토리 생성 및 초기 구조 구성
  - HEAD, refs, objects 디렉토리 세팅

- `git add .`
  - 작업 디렉토리 순회 후 blob 객체 생성 및 저장
  - .gitignore에 명시된 파일은 제외 처리
  - `.mygit/index`에 파일 경로와 blob 해시 매핑 저장

### 🔜 구현 예정

- `git commit`  
  - staging된 blob 정보 기반 트리 및 커밋 객체 생성
  - 커밋 간 부모-자식 연결 구성

---

## 📌 주요 학습 포인트 및 고민

- 📁 `fs.readdir`, `fs.readFile`을 통한 파일 탐색 및 blob 저장
- 🧩 TypeScript 모듈 import 시 `import * as mod` 방식 사용
- 📦 ESM & CommonJS의 차이와 적용 방식 이해
- 🧠 에러 처리 위치 및 예외 처리 구조 고민
- 🗂️ Git index 파일 구조와 역할 학습

---

## 💡 프로젝트 목적

- Git의 내부 작동 원리를 직접 구현하며 깊이 있는 이해 도모
- CLI 기반 툴 개발을 통해 파일 시스템, 프로세스 인자 처리, 해시 처리 등 핵심 기술 습득
- 다국어 기술 문서(영어·일본어) 해석 능력 및 활용 능력 강화

---

## 🚀 실행 방법

```bash
npm install -g .
mygit init
mygit add .
```

> `package.json`의 bin 설정을 통해 `mygit` 명령어 등록  
> `tsconfig.json`에서 `preserveShebang: true`로 설정해야 정상 실행됨

---

## 📝 TODO

- [ ] `commit` 명령어 구현
- [ ] `log`, `status` 등 부가 기능 확장
- [ ] 테스트 코드 작성 및 리팩토링
