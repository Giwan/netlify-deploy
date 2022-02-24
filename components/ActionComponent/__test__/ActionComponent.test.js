import { render, screen } from "@testing-library/react";
import ActionComponent from "../ActionComponent";

describe("ActionComponent", () => {
    it("should render", () => {
        render(<ActionComponent />);

        const sandboxLink = screen.queryByTitle("sandbox / demo page");
        expect(sandboxLink).toBeInTheDocument();
        expect(sandboxLink).toHaveAccessibleDescription("sandbox / demo page");
        expect(sandboxLink).toHaveAttribute("href", "/sandbox");
    });
});
