import "./App.css";
import sayHello from "./code1";
import Counter from "./code2";

function App() {
  return (
    <>
      {sayHello("khaled")}
      <Counter/>
    </>
  );
}

export default App;