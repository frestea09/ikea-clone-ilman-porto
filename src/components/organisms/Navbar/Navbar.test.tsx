import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("is can render", () => {
    render(<Navbar />);
  });
});
