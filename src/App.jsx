import { useState, useContext } from "react";
import { TodoContext } from "./context/TodoContext";

function App() {
  const {
    todos = [],
    handleSaveNewTodo = () => {},
    handleUpdateTodo = () => {},
    handleDeleteTodo = () => {},
    handleStatusUpdate = () => {},
  } = useContext(TodoContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "not-completed",
  });
  const [isUpdateMode, setUpdateMode] = useState(false);

  function emptyForm() {
    setFormData({
      ...formData,
      title: "",
      description: "",
    });
  }

  function handleInputChange(e) {
    const formDataCopy = {
      ...formData,
      [e.target.id]: e.target.value,
    };
    setFormData(formDataCopy);
  }

  function handleEditClick(id = 0) {
    setUpdateMode(true);
    const todosCopy = [...todos];
    setFormData(todosCopy.find((todo) => todo.id === id));
  }

  return (
    <>
      <h1>Todo Application</h1>
      <div>
        <input
          id="title"
          value={formData.title}
          placeholder="Task Name"
          onChange={handleInputChange}
        />
        <input
          id="description"
          value={formData.description}
          placeholder="Task Description"
          onChange={handleInputChange}
        />
        {!isUpdateMode ? (
          <button
            onClick={() => {
              handleSaveNewTodo(formData);
              emptyForm();
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              handleUpdateTodo(formData);
              setUpdateMode(false);
              emptyForm();
            }}
          >
            Update
          </button>
        )}
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={`${todo.title}-${index}`}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>{todo.status}</p>
            <div>
              <label htmlFor="status">Status</label>
              <input
                id="status"
                type="checkbox"
                onChange={(e) => handleStatusUpdate(todo.id, e.target.checked)}
              />
            </div>
            <div>
              <button onClick={() => handleEditClick(todo.id)}>Edit</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// <>
//   <h1>{appContextData.heading}</h1>
//   <p>{appContextData.description}</p>
//   <One />
//   <Two />
// </>;
