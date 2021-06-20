import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"

function App() {
  return (
    <div  className="bg">
      <Navi/>
      <Container className="main">
      <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
