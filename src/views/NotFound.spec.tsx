import { render, waitFor, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("should render a page not found heading", async () => {
    const rendered = render(<NotFound />);

    await waitFor(() => screen.findByText("Page Not Found"));

    expect(screen.findByText).not.toBeNull();
    expect(rendered).toMatchSnapshot();
  });
});
