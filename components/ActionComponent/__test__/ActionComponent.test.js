import { render, screen } from "@testing-library/react";
import ActionComponent from "../ActionComponent";

describe("ActionComponent", () => {
    it("should render", () => {
        render(<ActionComponent />);
        const quickStartLink = screen.queryByTitle("quick start guide");
        expect(quickStartLink).toBeInTheDocument();
        expect(quickStartLink).toHaveAccessibleDescription("quick start guide");
        expect(quickStartLink).toHaveAttribute("href", "/quick-start");

        const sandboxLink = screen.queryByTitle("sandbox / demo page");
        expect(sandboxLink).toBeInTheDocument();
        expect(sandboxLink).toHaveAccessibleDescription("sandbox / demo page");
        expect(sandboxLink).toHaveAttribute("href", "/sandbox");

        const header1 = screen.queryByText("Automation");
        expect(header1).toBeInTheDocument();

        const header2 = screen.queryByText("Manual");
        expect(header2).toBeInTheDocument();
    });
});
