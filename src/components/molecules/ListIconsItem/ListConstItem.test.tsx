import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { LIstIconsItem } from "./LIstIconstItem";

describe("ListIconesItem", () => {
  it("is working", () => {
    render(<LIstIconsItem item={"2"} key={"2"} />);
    screen.debug();
    const nodeItem = screen.getByText(/2/i);
    expect(nodeItem).toBeInTheDocument();
  });
});
