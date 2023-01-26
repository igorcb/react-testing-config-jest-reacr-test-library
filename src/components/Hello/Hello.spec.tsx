import { render, screen } from "@testing-library/react";
import React from "react";
import { Hello } from "./Hello";

it("renders Hello Word", () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello Word/);
  expect(myElement).toBeInTheDocument();
});
