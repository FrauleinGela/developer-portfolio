import "./App.css";
import { RouterProvider } from "react-router";
import router from "./core/Router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
