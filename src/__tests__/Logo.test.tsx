import { screen, render } from "@testing-library/react";

import Logo from "../components/atoms/Logo";

describe("Logo Component", () => {
  test("Should render a image with alt attribute", () => {
    render(<Logo />);

    const logo = screen.getByRole("img");

    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('alt');
  });
});
