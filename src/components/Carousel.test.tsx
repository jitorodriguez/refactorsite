import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import ProjectList from "../template/ProjectData";
import Carousel from "./carousel";

describe("Carousel component", () => {
  test("Validate images load", () => {
    const project = ProjectList[0];
    render(<Carousel images={project.images} />);

    const images = screen.getAllByRole("img");
    let counter = 0;
    project.images.forEach(() => {
      expect(images[counter]).toHaveAttribute("src", project.images[counter]);
      counter++;
    });
  });
  test("User clicks on image to move to next image", async () => {
    const user = userEvent.setup();
    const project = ProjectList[0];
    render(<Carousel images={project.images} />);

    const images = screen.getAllByRole("img");
    await user.click(images[0]);
    expect(images[0]).toHaveAttribute("style", "transform: translate(-100%);");
  });
  test("Image translates after interval", async () => {
    jest.useFakeTimers();
    const project = ProjectList[0];
    render(<Carousel images={project.images} />);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("style", "transform: translate(-100%);");
  });
});
