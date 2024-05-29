import { render, screen } from "@testing-library/react";
import Contact from "../ContactUs";
import "@testing-library/jest-dom";

test("Contact page", () => {
  render(<Contact />);

  const heading = screen.findAllByRole("heading");
  expect(heading).toBeInTheDocument();
});
