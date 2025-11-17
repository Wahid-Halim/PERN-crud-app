import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";
import useTodos from "./hooks/useTodos";

const App = () => {
  const todoHook = useTodos();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center ">
        <div className="w-3xl space-y-10">
          <h1 className="text-5xl font-bold">TaskBoard</h1>
          <TodoForm {...todoHook} />
          <TodoTable {...todoHook} />
        </div>
      </div>
    </div>
  );
};

export default App;
