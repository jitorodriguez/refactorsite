import { render, screen } from "@testing-library/react";

import Mission from "./Mission";
import quote from "../assets/quote.jpg";

const sampleProps = {
  title: "Sample Title",
  message: "Sample message.",
  image: quote,
  altImage: "Alternative image text.",
};

describe("Mission Component", () => {
  test("Validate Mission header renders", () => {
    render(
      <Mission
        title={sampleProps.title}
        message={sampleProps.message}
        image={sampleProps.image}
        altImage={sampleProps.altImage}
      />
    );

    const titleElement = screen.getByText(sampleProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate Mission message renders", () => {
    render(
      <Mission
        title={sampleProps.title}
        message={sampleProps.message}
        image={sampleProps.image}
        altImage={sampleProps.altImage}
      />
    );

    const messageElement = screen.getByText(sampleProps.message);
    expect(messageElement).toBeInTheDocument();
  });

  test("Validate Mission image renders", () => {
    render(
      <Mission
        title={sampleProps.title}
        message={sampleProps.message}
        image={sampleProps.image}
        altImage={sampleProps.altImage}
      />
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("alt", sampleProps.altImage);
    expect(imageElement).toHaveAttribute("src", sampleProps.image);
  });
});
