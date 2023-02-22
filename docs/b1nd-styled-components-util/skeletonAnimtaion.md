# skeletonAnimtaion

skeletonAnimtaion 애니메이션은 styled css 내에서 호출만으로도 애니메이션이 보여지도록 해주는 애니메이션입니다.

## Examples

```ts
import { styled } from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const Container = styled.div`
  width: 100px;
  height: 100px;
  ${skeletonAnimtaion}
`;
```
