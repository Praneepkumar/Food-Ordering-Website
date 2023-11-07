import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "./mocks/ResList-mockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render the Component based on search inputs", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  //const searchBtn = screen.getByRole("button", { name: "Search" });
  //const searchBtn = screen.getByTestId("search");
  const searchBtn = screen.getByPlaceholderText("Type menu, restuarants, etc");

  expect(searchBtn).toBeInTheDocument();
});
