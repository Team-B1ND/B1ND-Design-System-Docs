---
sidebar_position: 2
---

Portal 컴포넌트는 class나 id 속성을 통해 상위에 있는 컴포넌트에 접근할 수 있도록 해주는 컴포넌트입니다.

## Example

```tsx
//app.tsx
const App = () => {
  return (
    <div>
      <div id="dialog" />
    </div>
  );
};

//components/Dialog.tsx
import { Portal } from "@b1nd/b1nd-dodam-common-ui";

const Dialog = () => {
  return (
    <Portal selector="#dialog">
      <div>다이얼로그</div>
    </Portal>
  );
};
```
