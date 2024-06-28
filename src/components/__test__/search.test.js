import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter, json } from "react-router-dom";
import Mock_Data from "../mocks/mockresListdata";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("Search test button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.findByRole("button", { name: "search" });

  expect(searchButton).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "biriyani" } });

  fireEvent.click(searchButton);
  //screen should load biriyani cards
  const cards = screen.getAllByTestId("searchInput");
});
