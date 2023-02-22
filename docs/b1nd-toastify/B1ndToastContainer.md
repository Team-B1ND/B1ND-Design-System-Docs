# B1ndToastContainer

B1ndToastContainer 컴포넌트는 react-toastify를 사용하기 위해 상단에 감싸주는 ProviderComponent 입니다.

```tsx
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";

const App = () => {
  return (
    <div>
      <B1ndToastContainer autoClose={5000} limit={6} />
      {children}
    </div>
  );
};
```
