# B1ndThemeProvider

B1ndThemeProvider 컴포넌트는 테마 객체를 받아 Styled-Components의 테마 기능을 이용할 수 있게 해주는 컴포넌트입니다.

b1ndTheme를 주입받아, Styled-Components의 테마 기능을 사용할 수 있습니다.

```tsx
import {
  B1ndThemeProvider,
  b1ndTheme,
} from "@b1nd/b1nd-styled-components-theme";

const App = () => {
  return <B1ndThemeProvider theme={b1ndTheme}>{children}</B1ndThemeProvider>;
};
```
