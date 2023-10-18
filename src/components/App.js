import Header from "./Header";
import DisplayUserContext from "../utils/DisplayUserContext";
import appStore from "../utils/redux/appStore";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux";

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <Provider store={appStore}>
      <DisplayUserContext.Provider value={{ user: userName, setUserName }}>
        <Header />
        <Outlet />
      </DisplayUserContext.Provider>
    </Provider>
  );
};

export default App;
