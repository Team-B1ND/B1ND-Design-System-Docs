---
sidebar_position: 3
---

b1nd palette를 기준으로 main컬러와 subMain컬러를 커스텀해서 palette를 생성하는 함수입니다.

```typescript
const palette = createPalette({ main: "#0067bc" });
```

```typescript
const Container = styled.div`
  background-color: ${palette.main}; //#0067bc
`;
```
