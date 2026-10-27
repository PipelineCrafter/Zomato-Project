
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the Zomato application", () => {
  render(<App />);

  expect(document.querySelector(".App")).toBeInTheDocument();
});
