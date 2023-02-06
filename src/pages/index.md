---
title: Introduction
hide_table_of_contents: true
---

<div class="jumbotron">
  <div class="jumbotron-inner-wrapper">
    <div class="jumbotron-shadow left"></div>
   
    <div class="jumbotron-shadow right"></div>
  </div>
</div>

# Form B1nding

<head>
  <meta property="og:title" content="Form B1nding" />
  <meta
    property="og:description"
    content="A collection of TypeScript/JavaScript packages to build high-quality web services."
  />
  <meta property="og:url" content="https://slash.page" />
  <meta property="og:image" content="https://static.toss.im/assets/slash-libraries/slash-og.png" />
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

.jumbotron {
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  overflow: hidden;
}

.jumbotron-shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 25px;
}

.jumbotron-shadow.left {
  left: 0;
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
}

.jumbotron-shadow.right {
  right: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
}

.jumbotron-inner-wrapper {
  position: relative;
  height: 100%;
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

- [**@b1nd/b1nd-design-core**](https://slash.page/libraries/react/use-overlay/src/useOverlay.i18n) 프로덕트를 디자인할때 필요한 코어적인 디자인 요소를 제공합니다.
- [**@b1nd/b1nd-dodam-common-ui**](https://slash.page/libraries/react/react/src/components/ClickArea/ClickArea.i18n) 프로덕트를 개발할때 자주 사용되는 컴포넌트를 제공합니다.
- [**@b1nd/b1nd-react-util**](https://slash.page/libraries/common/utils/README.i18n) 프로덕트를 개발할때 자주 사용하는 훅이나, 유틸 컴포넌트를 제공합니다.
- [**@b1nd/b1nd-styled-components-theme**](https://slash.page/libraries/common/hangul/README.i18n) styled-components 테마(다크모드, 라이트모드)를 제공합니다.
- [**@b1nd/b1nd-styled-components-util**](https://slash.page/libraries/common/hangul/README.i18n) styled-components를 사용할 때 유용한 함수나, 애니메이션 등을 제공합니다.
- [**@b1nd/b1nd-styled-components-theme**](https://slash.page/libraries/common/hangul/README.i18n) 바인드팀이 사용하는 toast를 클래스로 제공합니다.
<div style={{ height: 24 }} />
