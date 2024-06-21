import { screen, render } from "@testing-library/react";
import Cardcontainer, { RestaurantPromotion } from "../Cardcontainer";
import mockData from "../mocks/resCardmock.json";
import "@testing-library/jest-dom";

it("render card component with props", () => {
  render(<Cardcontainer resValue={mockData} />);

  const name = screen.getByText("Salem RR Biriyani Unavagam");
  expect(name).toBeInTheDocument();

  const areaName = screen.getByText("T. Nagar");
  expect(areaName).toBeInTheDocument();

  /*  const cloudinaryImageId = screen.getByRole(
    "9474bd2e1c952bc131f9c5dbfa7d2139"
  );
  expect(cloudinaryImageId).toBeInTheDocument(); */
});

it("render higher order component", () => {
  render(<RestaurantPromotion />);
});
