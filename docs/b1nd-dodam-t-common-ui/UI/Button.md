# Button

Button 컴포넌트는 도담도담 티쳐에서 수락과 거절 등 많은 사용되는 버튼을 손쉽게 구현할 수 있도록 해줍니다.

![ButtonImage](../img/Button.png.png)

## Props

| 속성 종류   | 속성 타입            | 속성 값  | 옵셔널 여부 |
| ----------- | -------------------- | -------- | ----------- |
| onClick     | mouse event function | () => {} | x           |
| customStyle | cssObject            |          | o           |

## Example

```tsx
//app.tsx
import { ButtonWrapper, Button } from "@b1nd/b1nd-dodam-t-common-ui

const App = () => {
  return (
   <ButtonWrapper>
      <Button onClick={() => {}} type="agree">수락</Button>
      <Button onClick={() => {}} type="disagree">거절</Button>
   </ButtonWrapper>
   )
};
```
