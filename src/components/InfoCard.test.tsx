import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";

describe("Info Card Component", () => {
  const textToValidate = "Testing Text";

  test("Validate title appears when title is set", () => {
    render(<InfoCard title={textToValidate} />);
    const titleElement = screen.getByText(textToValidate);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate subtitle appears when subtitle is set", () => {
    render(<InfoCard subTitle={textToValidate} />);

    const subTitleElement = screen.getByText(textToValidate);
    expect(subTitleElement).toBeInTheDocument();
  });

  test("Validate text appears when text set", () => {
    render(<InfoCard text={textToValidate} />);

    const textElement = screen.getByText(textToValidate);
    expect(textElement).toBeInTheDocument();
  });

  test("Validate listed text amount was displayed", () => {
    const textList: string[] = [textToValidate, textToValidate, textToValidate];
    render(<InfoCard listedText={textList} />);

    const listedItems = screen.getAllByText(textToValidate);
    expect(listedItems.length).toBe(textList.length);
  });
});
