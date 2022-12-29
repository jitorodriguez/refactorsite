import { render, screen } from "@testing-library/react";
import Portfolio from "./Portfolio";

describe("Portfolio Component", () => {
  test("Validate heading is visible", () => {
    render(<Portfolio />);

    const heading = screen.getByText("Portfolio");

    expect(heading).toBeInTheDocument();
  });
});
