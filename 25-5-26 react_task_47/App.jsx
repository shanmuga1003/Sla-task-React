import Counter from "./features/counter/Counter";
import Todos from "./features/todos/Todos";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Example</h1>

      <Counter />

      <hr />

      <Todos />
    </div>
  );
}

export default App;