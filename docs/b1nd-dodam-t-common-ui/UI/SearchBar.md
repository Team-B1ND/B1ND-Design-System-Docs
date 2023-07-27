# SearchBar

SearchBar 특정 학생을 검색 할 때 사용하는 검색바를 손쉽게 구현해 줄 수 있도록 해줍니다.

![SearchBarImage](../img/SearchBar.png)

# Props

| 속성 종류 | 속성 타입      | 속성 값  | 옵셔널 여부 |
| --------- | -------------- | -------- | ----------- |
| onSubmit  | void function  | () => {} | x           |
| onChange  | SetStateAction | string   | x           |
| value     | string         | string   | x           |

# Example

```tsx
//app.tsx
import { SearchBar } from "@b1nd/b1nd-dodam-t-common-ui";

const App = () => {
  return <SearchBar onChange={setKeyword} value={keyword} />;
};
```
