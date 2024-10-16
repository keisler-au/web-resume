import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";
import NavBar from "./components/NavBar";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Josh Keisler/i);
  expect(linkElement).toBeInTheDocument();
});
