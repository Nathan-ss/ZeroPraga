import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BaseRoutes from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        <BaseRoutes />
      </Router>
    </>
  );
}

export default App;
