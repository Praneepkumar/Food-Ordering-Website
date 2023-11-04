import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";
describe("The Test cases of Contact component", () => {
  //test or it
  it("Test Contact component to loaded", () => {
    //render component
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Testing Input fields", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBeGreaterThan(0);
  });
});
