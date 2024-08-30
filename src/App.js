import { BrowserRouter } from "react-router-dom";
import CustomerApp from "./CustomerComponent/CustomerApp";
import StoreApp from "./StoreComponent/StoreApp";

function App() {
  return (
    <div >
      <BrowserRouter>
      <StoreApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
