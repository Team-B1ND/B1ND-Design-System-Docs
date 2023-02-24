---
title: Introduction
hide_table_of_contents: true
---

![BannerImage](../../static/img/banner.svg)

# Form B1nding

<head>
  <meta property="og:title" content="Form B1nding" />
  <meta
    property="og:description" 
    content="UI 컴포넌트, Util 함수, Animation 등 프로덕트를 개발하는데 유용한 여러 패키지를 제공하는 바인드 프론트엔드 팀 디자인시스템 입니다."
  />
  <meta property="og:url" content="https://team-b1nd.github.io/Form-B1nding-Docs/" />
</head>

<div className="mainpage_hero">
  <div style={{ gridArea: 'text' }}>
  <p>
    Form B1nding은 <a href="https://b1nd.com/#/service">바인드 프론트엔드팀</a>이 도담도담 등 프로덕트를 만들면서 생산성을 올리기 위해 개발되었습니다.
  </p>

  <p>UI 컴포넌트, Util 함수, Animation 등 프로덕트를 개발하는데 유용한 여러 패키지를 제공합니다.</p>

  </div>
</div>

<style
  dangerouslySetInnerHTML={{
    __html: `
.mainpage_hero {
  display: grid;
}

@media (min-width: 600px) {
  .mainpage_hero {
    grid-template-areas: "text image";
    grid-template-columns: 1fr 300px;
  }

  .key-video {
    width: auto;
    height: 100%;
  }
}

@media (max-width: 600px) {
  .mainpage_hero {
    grid-template-areas: "image" "text";
    grid-template-rows: min-content min-content;
  }


  .key-video {
    width: auto;
    height: 100%;
  }
}
`,
  }}
></style>
<div style={{ height: 24 }} />

## Featured libraries

- [**@b1nd/b1nd-design-core**](https://team-b1nd.github.io/Form-B1nding-Docs/docs/b1nd-design-core) 프로덕트를 디자인할때 필요한 코어적인 디자인 요소를 제공합니다.
- [**@b1nd/b1nd-dodam-common-ui**](https://team-b1nd.github.io/Form-B1nding-Docs/docs/category/b1ndb1nd-dodam-common-ui) 프로덕트를 개발할때 자주 사용되는 컴포넌트를 제공합니다.
- [**@b1nd/b1nd-react-util**](https://team-b1nd.github.io/Form-B1nding-Docs/docs/category/b1ndb1nd-react-util) 프로덕트를 개발할때 자주 사용하는 훅이나, 유틸 컴포넌트를 제공합니다.
- [**@b1nd/b1nd-styled-components-theme**](https://team-b1nd.github.io/Form-B1nding-Docs/docs/category/b1ndb1nd-styled-components-theme) styled-components 테마(다크모드, 라이트모드)를 제공합니다.
- [**@b1nd/b1nd-styled-components-util**](https://team-b1nd.github.io/Form-B1nding-Docs/docs/category/b1ndb1nd-styled-components-util) styled-components를 사용할 때 유용한 함수나, 애니메이션 등을 제공합니다.
- [**@b1nd/b1nd-styled-components-theme**](https://team-b1nd.github.io/Form-B1nding-Docs/docs/category/b1ndb1nd-toastify) 바인드팀이 사용하는 toast를 클래스로 제공합니다.
<div style={{ height: 24 }} />
