import Header from "./components/Header";
import appStore from "./utils/redux/appStore";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import DisplayUserContext from "./utils/DisplayUserContext";
import { useState } from "react";
const App = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className='container'>
      <Provider store={appStore}>
        <DisplayUserContext.Provider value={{ user: userName, setUserName }}>
          <Header />
          <Outlet />
        </DisplayUserContext.Provider>
      </Provider>
    </div>
  );
};
export default App;
