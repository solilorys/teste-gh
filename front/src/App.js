import "./styles/global.css";
import Router from "./routes/index";
import { BrowserRouter } from "react-router-dom";
//import ListAtividade from "./pages/ListAtividade/index";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
