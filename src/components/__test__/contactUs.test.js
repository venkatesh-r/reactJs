import { render, screen } from "@testing-library/react";
import Contact from "../ContactUs";
import "@testing-library/jest-dom";

test("Contact page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("check input", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");

  //Assertion
  expect(inputName).toBeInTheDocument();
});
