# ellipsisLine

ellipsisLine 함수는 css 적으로 줄임(ellipsisLine) ... 을 쉽게 구현할 수 있도록 해주는 함수입니다.

```ts
import { styled } from "styled-components";
import { ellipsisLine } from "@b1nd/b1nd-styled-components-util";

export const Text = styled.p`
  font-size: 18px;
  ${ellipsisLine(2)}
`;
```
