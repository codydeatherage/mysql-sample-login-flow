import "./App.css";
import CreateUserForm from "./components/CreateUserForm";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CreateUserForm />
    </div>
  );
};

export default App;
