import { render, screen } from "@testing-library/react";
import DisplayRestaurants, {
  DiscountInfoRestaurant,
} from "../components/DisplayRestaurants";

import MOCK_DATA from "./mocks/ResCard-mockdata.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
describe("It should test all the test cases for Restaurant card", () => {
  it("Should render Restaurant cards with props data", () => {
    render(
      <BrowserRouter>
        <DisplayRestaurants restaurantInfo={MOCK_DATA} />
      </BrowserRouter>,
    );
    const resName = screen.getByText("Mujtaba Grill");
    expect(resName).toBeInTheDocument();
  });
  it("Should test the Promotions card with Label", () => {
    const RestaurantsWithDiscounts = DiscountInfoRestaurant(DisplayRestaurants);
    render(
      <BrowserRouter>
        <RestaurantsWithDiscounts restaurantInfo={MOCK_DATA} />
      </BrowserRouter>,
    );
    const discountLabel = screen.getByText("₹150 OFF ABOVE ₹349");
    expect(discountLabel).toBeInTheDocument();
  });
});
