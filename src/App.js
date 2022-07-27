import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./app/components/redux/store";
import "react-modern-drawer/dist/index.css";
import Pages from "./app/pages";

function App() {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  );
}

export default App;
