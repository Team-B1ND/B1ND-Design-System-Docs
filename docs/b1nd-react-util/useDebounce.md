# useDebounce

useDebounce는 `lodash/debounce`를 쉽게 사용할 수 있도록 해주는 유틸 훅입니다.

## Examples

```typescript
const handleClick = useDebounce(() => {
  console.log("클릭");
}, 500);
```
