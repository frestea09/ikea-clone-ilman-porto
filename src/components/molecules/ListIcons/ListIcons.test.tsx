import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ListIcons } from "./ListIcons";

describe("ListIcons", () => {
  it("is ListIcons render", () => {
    render(<ListIcons />);
    const dataTestIdNode = screen.getByTestId("list-icons-test");
    expect(dataTestIdNode).toBeInTheDocument();
    const listNode = screen.getAllByRole("list");
    expect(listNode).toHaveLength(1);
  });
});
