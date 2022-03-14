import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./API";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      const fetchTodos = (): void => {
        getTodos()
          .then(({ data: { data = [] } }: ITodo[] | any) => setTodos(data))
          .catch((err: Error) => console.log(err));
      };
      fetchTodos();
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, []);

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>Todos </h1>

      <AddTodo saveTodo={handleSaveTodo} />
      <ul>
        {todos?.map((todo: ITodo) => (
          <TodoItem
            key={todo.id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo.bind(null, todo.id)}
            todo={todo}
          />
        ))}
      </ul>
    </main>
  );
};

export default App;
