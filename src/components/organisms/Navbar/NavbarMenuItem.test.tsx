import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { NavbarMenuItem } from "./NavbarMenuItem";

describe("NavbarMneuItem", () => {
  it("is can render", () => {
    render(<NavbarMenuItem />);
  });
});
