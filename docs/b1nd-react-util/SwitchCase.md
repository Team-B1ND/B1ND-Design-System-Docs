# SwitchCase

SwitchCase 컴포넌트는 switch-case 구문을 선언적으로 처리할 수 있도록 만들어진 유틸 컴포넌트입니다.

## Examples

```tsx
<SwitchCase
  value={status}
  // status 값이 `'a'`, `'b'`, `'c'` 인지에 따라서 아래 컴포넌트가 render 됩니다.
  caseBy={{
    a: <TypeA />,
    b: <TypeB />,
    c: <TypeC />,
  }}
  // status 값이 아무것도 해당되지 않는 경우, 이 컴포넌트가 render 됩니다.
  defaultComponent={<Default />}
/>
```
