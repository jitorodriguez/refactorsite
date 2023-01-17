import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProjectList from "../template/ProjectData";
import PortfolioItem from "./PortfolioItem";

describe("Portfolio Item Component", () => {
  test("Validate Project Title renders", () => {
    const project = ProjectList[0];
    const isFound = jest.fn(() => true);
    render(<PortfolioItem item={project} isOpen={true} setActive={() => {}} />);

    const titleText = screen.getAllByText(project.title);
    titleText.forEach((element) => {
      expect(element).toBeInTheDocument();
      isFound();
    });

    expect(isFound).toHaveReturnedTimes(2);
  });
  test("Validate Project Description renders", () => {
    const project = ProjectList[0];
    render(<PortfolioItem item={project} isOpen={true} setActive={() => {}} />);

    const descriptionText = screen.getByText(project.description);
    expect(descriptionText).toBeInTheDocument();
  });
  test("Validate Project Specifications renders", () => {
    const project = ProjectList[0];

    render(<PortfolioItem item={project} isOpen={true} setActive={() => {}} />);

    const specificationsText = screen.getByText(
      "SPECIFICATIONS: " + project.specifications
    );

    expect(specificationsText).toBeInTheDocument();
  });
  test("Validate content area is opened", () => {
    const project = ProjectList[0];

    render(<PortfolioItem item={project} isOpen={true} setActive={() => {}} />);

    const expansionElement = screen.getByRole("button", { expanded: true });
    expect(expansionElement).toBeInTheDocument();
  });
  test("Validate content area is closed", () => {
    const project = ProjectList[0];
    render(
      <PortfolioItem item={project} isOpen={false} setActive={() => {}} />
    );

    const expansionElement = screen.getByRole("button", { expanded: false });
    expect(expansionElement).toBeInTheDocument();
  });
  test("User can click the title", async () => {
    const user = userEvent.setup();
    const project = ProjectList[0];
    const isClicked = jest.fn(() => true);
    render(
      <PortfolioItem item={project} isOpen={false} setActive={isClicked} />
    );

    const titleText = screen.getAllByText(project.title);
    await user.click(titleText[0]);

    expect(isClicked).toHaveReturnedTimes(1);
  });
  test("Link is loaded and displayed", () => {
    const project = ProjectList[0];
    render(<PortfolioItem item={project} isOpen={true} setActive={() => {}} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
  });
  test("Verify link URL is set", () => {
    const project = ProjectList[0];
    render(<PortfolioItem item={project} isOpen={true} setActive={() => {}} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute('href', "https://github.com/WilliamRADFunk/vedic" );
  });
  test("Panel icon shows plus icon when not open", () => {
    const project = ProjectList[0];
    render(<PortfolioItem item={project} isOpen={false} setActive={() => {}} />);

    const plusElement = screen.getByTitle("plus");
    expect(plusElement).toBeInTheDocument();
  });
  test("Panel icon shows minus icon when open", () => {
    const project = ProjectList[0];
    render(<PortfolioItem item={project} isOpen={true} setActive={() => {}} />);

    const plusElement = screen.getByTitle("minus");
    expect(plusElement).toBeInTheDocument();
  });
});
