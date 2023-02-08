# useThrottle

useThrottle은 `lodash/throttle`을 쉽게 사용할 수 있도록 해주는 유틸 훅입니다.

## Examples

```typescript
const handleClick = useThrottle은(() => {
  console.log("클릭");
}, 5000);
```
