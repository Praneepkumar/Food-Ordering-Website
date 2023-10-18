import Header from "./components/Header";
import appStore from "./utils/redux/appStore";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
const App = () => {
  return (
    <div className='container'>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};
export default App;
