import { render } from "@testing-library/react";
import { NavbarLogo } from "./NavbarLogo";

describe("Navbar Logo", () => {
  it("is rendering working", () => {
    render(<NavbarLogo />);
  });
});
