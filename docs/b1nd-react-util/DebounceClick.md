# DebounceClick

DebounceClick 컴포넌트는 click event에 debounce를 적용할 수 있는 유틸 컴포넌트입니다.

여러번의 이벤트를 하나로 묶어서 설정한 시간이 지나고 마지막 한번만 방출합니다

capture 라는 optinal props는 onClick 외 다른 이벤트 호출 prop으로 디바운스를 작동시킬 때 사용합니다.

## Examples

```tsx
<DebounceClick wait={200}>
  <Button
    onClick={() => {
      alert("onClick 이벤트 발생");
    }}
  >
    클릭
  </Button>
</DebounceClick>
```
