# b1ndTheme

b1ndTheme 테마는 Theme-Provider에 사용되는 다크, 라이트모드 객체입니다.

b1ndTheme를 B1ndThemeProvider에 주입하여 Styled-Components의 테마 기능을 사용할 수 있습니다.

```ts
export const lightTheme: B1ndTheme = {
  backgroundColor: "#f0f2f4",
  backgroundColor2: "#ffffff",
  backgroundColor3: "#ffffff",
  backgroundColor4: "#f0f2f4",
  desableBackground: "#f7f7f7",
  borderColor: "#d2d2d2",
  borderColor2: "#3d3d3d",
  contrast: "#000000",
  contrast2: "#5c5c5c",
  contrast3: "#a1a1a1",
  hoverColor: "#e2e2e2",
  headerBoxShadow: "0 1px 1px 0 hsl(0deg 0% 80% / 80%)",
  darkmodeButtonColor: "#efefef",
  footerBackground: "#292c33",
};

export const darkTheme: B1ndTheme = {
  backgroundColor: "#1a1a1a",
  backgroundColor2: "#292929",
  backgroundColor3: "#1a1a1a",
  backgroundColor4: "#292929",
  desableBackground: "#1a1a1a",
  borderColor: "#3d3d3d",
  borderColor2: "#1a1a1a",
  contrast: "#ffffff",
  contrast2: "#e2e2e2",
  contrast3: "#ffffff",
  hoverColor: "#3d3d3d",
  headerBoxShadow: "0 1px 1px 0 rgba(61,61,61,.8)",
  darkmodeButtonColor: "#3d3d3d",
  footerBackground: "#292929",
};
```
