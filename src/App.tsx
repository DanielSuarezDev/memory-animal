import { BrowserRouter as Router } from "react-router-dom";

import "./styles/globals.css";
import AppRouter from "./routes";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
