import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import Mock_Data from "../mocks/mockresListdata.json";
import { act } from "@testing-library/react";
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

  const cards = screen.findAllByTestId("resCard");
  console.log("test::" + cards);
  //expect(cards.length).toBe(1);
});
