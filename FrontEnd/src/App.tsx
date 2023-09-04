import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BaseRoutes from "./routes/routes";
import { MenuComponent } from "./components/Menu";

function App() {
  return (
    <>
      <Router>
        <MenuComponent>
          <BaseRoutes />
        </MenuComponent>
      </Router>
    </>
  );
}

export default App;
