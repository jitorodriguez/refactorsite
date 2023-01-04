import { screen, render } from "@testing-library/react";
import Link from "./Link";

import gitImage from "../assets/img/logo_github.png";

describe("Link Component", () => {
  const testLink = "https://github.com/jitorodriguez";
  const testText = "Testing Text";

  test("Validate link is shown", () => {
    render(<Link link={testLink} linkText={testText} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement.getAttribute("href")).toBe(testLink);
  });

  test("Link text is shown", () => {
    render(<Link link={testLink} linkText={testText} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement.innerHTML).toBe(testText);
  });

  test("Link image is shown", () => {
    render(<Link link={testLink} linkText={testText} img={gitImage} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement.getAttribute("src")).toBe(gitImage);
  });

  test("Alt text on image is set", () => {
    render(
      <Link
        link={testLink}
        linkText={testText}
        img={gitImage}
        altImg={testText}
      />
    );
    const imgElement = screen.getByRole("img");
    expect(imgElement.getAttribute("alt")).toBe(testText);
  });

  test("image does not render without image property", () => {
    render(<Link link={testLink} linkText={testText} altImg={testText} />);
    const imgElement = screen.queryByRole("img");
    expect(imgElement).toBeNull();
  });
});
