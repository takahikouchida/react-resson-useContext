import "./App.css";
import { createContext, useState } from "react";
import { ComponentA } from "./components/ComponentA";

export const UserCount = createContext();

function App() {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lean UserContext</h1>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default App;
