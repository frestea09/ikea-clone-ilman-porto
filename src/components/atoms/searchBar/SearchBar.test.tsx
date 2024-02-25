import { render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("Searchbar", () => {
  it("is work", () => {
    render(<SearchBar />);
  });
});
