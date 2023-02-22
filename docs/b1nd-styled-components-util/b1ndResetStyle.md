# b1ndResetStyle

b1ndResetStyle 은 Styled-Components GlobalStyle에서 reset-css를 적용할 수 있게 해주는 함수입니다.

## Examples

```ts
import { createGlobalStyle } from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const GlobalStyle = createGlobalStyle`

    ${b1ndResetStyle}
`;
```
