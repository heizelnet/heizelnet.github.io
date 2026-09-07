# 문현종 (Hyunjong Moon) — Profile

경력기술서 및 포트폴리오 페이지. 빌드 스텝 없는 정적 HTML로 GitHub Pages에 배포합니다.

- 공개 주소(예정) : https://heizelnet.github.io/
- 벤치마크 참조 : https://gunh0.github.io/profile/

## 구조

```
index.html            # 본문 (콘텐츠는 전부 여기)
assets/css/style.css  # 스타일 (CSS custom properties 기반, 라이트/다크)
assets/js/main.js     # 테마 토글 · 스크롤스파이 · 인쇄 · 이메일 난독화
assets/img/           # 프로필 이미지, OG 이미지
assets/docs/          # 공개 가능한 논문 PDF 등
mockup/               # 구조 검토용 목업 (벤치마크 텍스트 기반, 배포 대상 아님)
private/              # 대외비 포함 상세본 — .gitignore 처리, 커밋 금지
```

## 로컬 확인

빌드 불필요. 브라우저로 `index.html`을 직접 열면 됩니다.

```sh
xdg-open index.html
# 또는
python3 -m http.server 8000
```

## 배포

`main` 브랜치 루트를 GitHub Pages 소스로 지정하면 끝입니다.
`.nojekyll`이 있어 Jekyll 처리를 건너뜁니다.

## 콘텐츠 원칙

공개 사이트에는 **요약·정량 지표·공개 링크**만 게재합니다.

- 대외비 프로젝트는 기술 스택과 수행 범위, 정량 성과만 기재하고
  취약점 발견 내용·조치 상세·증적 스크린샷은 게재하지 않습니다.
- 군 복무 이력은 부대·편제·임무 대상을 기재하지 않고 기술 영역만 기재합니다.
- 심사 중 논문은 제목과 `Under review` 상태만 표기하고 PDF는 게재하지 않습니다.
- 상세 경력기술서는 `private/`에서 별도 관리하고 요청 시 직접 전달합니다.
