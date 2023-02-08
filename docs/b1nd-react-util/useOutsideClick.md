# useOutsideClick

useOutsideClick는 지정한 컨테이너 밖의 요소에서 클릭 이벤트가 발생했을 때 효과를 줄 수 있는 유틸 훅입니다.

## Examples

```typescript
const ref = useRef<HTMLElement>(null);

useOutsideClickEffect(ref, () => {
  console.log("outside clicked!");
});
```

```typescript
const ref1 = useRef<HTMLElement>(null);
const ref2 = useRef<HTMLElement>(null);

useOutsideClickEffect([ref1, ref2], () => {
  console.log("outside clicked!");
});
```
