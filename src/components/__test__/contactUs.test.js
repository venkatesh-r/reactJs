import { render, screen } from "@testing-library/react";
import Contact from "../ContactUs";
import "@testing-library/jest-dom";

// group of test cases
describe("contact page test cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  it("Contact page", () => {
    render(<Contact />);
    //Quering
    const heading = screen.getByRole("heading");
    //Assert
    expect(heading).toBeInTheDocument();
  });

  it("check placeholder", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("load 2 input boxes", () => {
    render(<Contact />);
    //quering
    const inputBoxes = screen.getAllByRole("textbox");
    //Assert
    expect(inputBoxes.length).toBe(2);
  });
});
