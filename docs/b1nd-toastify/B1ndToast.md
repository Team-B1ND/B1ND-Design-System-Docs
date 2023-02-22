# B1ndToast

B1ndToast 클래스는 react-toastify의 함수를 좀 더 간결하고 편하게 사용할 수 있게 해주는 클래스입니다.

케이스는 `success`, `info`, `error` 세가지가 존재합니다.

B1ndToastContainer가 상위에 감싸져 있어야 스타일이 적용됩니다.

## Examples

```ts
import { B1ndToast } from "@b1nd/b1nd-toastify";

const useShowAlert = () => {
  const execute = () => {
    B1ndToast.success("성공");
  };
};
```
