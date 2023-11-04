import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import "@testing-library/jest-dom";

test("Should test whether the login button is loaded when the component is rendered", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);
  expect(loginBtn).toBeInTheDocument();
});
