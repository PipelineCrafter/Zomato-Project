
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Zomato application", () => {
  render(<App />);

  expect(screen.getByRole("main")).toBeInTheDocument();
});
