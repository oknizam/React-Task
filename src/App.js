import "./App.css";
import Routes from "./routes/routing";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
