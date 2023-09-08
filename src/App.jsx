import "./App.css";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import { Store } from "./Reducers/Store";

function App() {
  return (
    <>
      <div className="">
        <Provider store={Store}>
          <Main />
        </Provider>
      </div>
    </>
  );
}

export default App;
