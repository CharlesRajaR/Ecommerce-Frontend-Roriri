import { BrowserRouter } from "react-router-dom";
import CustomerApp from "./CustomerComponent/CustomerApp";

function App() {
  return (
    <div >
      <BrowserRouter>
      <CustomerApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
