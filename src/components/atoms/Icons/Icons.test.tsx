import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Icons } from "./Icons";
import { AiFillAccountBook } from "react-icons/ai";

describe("Icons", () => {
  it("is render works", () => {
    render(
      <Icons>
        <h3>hello world</h3>
      </Icons>
    );
    const aboutHelloWorldNode = screen.getByRole("heading");
    expect(aboutHelloWorldNode).toBeInTheDocument();
    const labelNode = screen.getByText(/hello world/i);
    expect(labelNode).toBeInTheDocument();
  });
  it("is props work", () => {
    render(
      <Icons>
        <AiFillAccountBook
          data-testid="custom-element"
          width={300}
          height={300}
        />
      </Icons>
    );
    screen.debug();
    const dataTestIdNode = screen.getByTestId("custom-element");
    expect(dataTestIdNode).toBeInTheDocument();
  });
});
