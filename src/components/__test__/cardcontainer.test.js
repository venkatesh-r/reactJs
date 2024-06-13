import { screen, render } from "@testing-library/react";
import Cardcontainer from "../Cardcontainer";
import mockData from "../mocks/resCardmock.json";
import "@testing-library/jest-dom";

it("render card component with props", () => {
  render(<Cardcontainer resValue={mockData} />);

  const name = screen.getByText("Yaa Mohaideen Biryani");

  expect(name).toBeInTheDocument();
});
