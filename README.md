# 문현종 (Hyunjong Moon)

Cloud-Native Security Engineer. 경력기술서 및 포트폴리오 페이지입니다.
빌드 스텝 없는 정적 HTML을 GitHub Pages로 서빙합니다.

## 구조

```
index.html              본문
assets/css/style.css    스타일 (라이트/다크 테마)
assets/js/main.js       테마 토글 · 스크롤스파이 · 인쇄 · 이메일 난독화
assets/img/             OG 이미지
favicon.svg
favicon.ico
```

외부 의존성은 Google Fonts 하나이며, 아이콘은 인라인 SVG 심볼로 포함되어 있습니다.

## 로컬 확인

빌드가 필요 없습니다. 브라우저로 `index.html`을 직접 열면 됩니다.

```sh
xdg-open index.html
# 또는
python3 -m http.server 8000
```

## 배포

`main` 브랜치 루트가 GitHub Pages 소스입니다. `.nojekyll`이 있어 Jekyll 처리를 건너뜁니다.

## 라이선스

아이콘은 [Font Awesome Free 6](https://fontawesome.com) (CC BY 4.0)을 사용합니다.
