import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the Zomato application", () => {
  const { container } = render(<App />);

  expect(container.firstChild).toHaveClass("App");
});
