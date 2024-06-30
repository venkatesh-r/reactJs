import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import Mock_Data from "../mocks/mockresListdata";
import { act } from "react";
import "@testing-library/jest-dom";

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

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "briyani" } });

  fireEvent.click(searchButton);
  //screen should load biriyani cards

  // Wait for the cards to be displayed
  /* await waitFor(() => {
    const cards = screen.getAllByTestId("resCard");
    // Log the cards to debug
    console.log(cards);
    expect(cards.length).toBe(2);
  }); */

  const cards = screen.findByTestId("resCard");
  console.log(cards);
  expect(cards.length).toBe(1);
});
