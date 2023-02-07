---
sidebar_position: 1
---

# Flex

Flex 컴포넌트는 `display : flex` 속성과 관련된 스타일을 손쉽게 스타일을 적용할 수 있도록 해주는 컴포넌트입니다.

## Props

| 속성 종류 | 속성 타입  | 속성 값                                       | 옵셔널 여부 |
| --------- | ---------- | --------------------------------------------- | ----------- |
| gap       | number     | 0 ~                                           | o           |
| justify   | string     | "center", "start", "end", "between", "around" | o           |
| align     | string     | "start", "end", "center", "baseline"          | o           |
| direction | string     | "row", "column"                               | o           |
| children  | react node |                                               | x           |

## Example

가로 세로 중앙 정렬

```tsx
<Flex justify="center" align="center">
  <button>a</button>
  <button>b</button>
  <button>c</button>
</Flex>
```

왼쪽 정렬 Gap 20

```tsx
<Flex justify="start" gap={20} align="center">
  <button>a</button>
  <button>b</button>
  <button>c</button>
</Flex>
```

오른쪽 정렬 Gap 20

```tsx
<Flex justify="end" gap={20} align="center">
  <button>a</button>
  <button>b</button>
  <button>c</button>
</Flex>
```
