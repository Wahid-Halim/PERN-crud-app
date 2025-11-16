import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

const App = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center ">
        <div className="w-3xl space-y-10">
          <h1 className="text-5xl font-bold">Input Todo</h1>
          <TodoForm />
          <TodoTable />
        </div>
      </div>
    </div>
  );
};

export default App;
