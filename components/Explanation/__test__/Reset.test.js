import Reset from "../Reset";
import { screen, render, fireEvent } from "@testing-library/react"; 

describe("Reset", () => {
    it("should render", () => {
        const props = {
            handleUrlChange: jest.fn(),
            url: "https://mytoori.com"
        }
        render(<Reset {...props} />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(props.handleUrlChange).toHaveBeenCalledTimes(1);
        expect(props.handleUrlChange).toHaveBeenCalledWith("");

    }); 

    it("should not render", () => {
        const props = {
            handleUrlChange: jest.fn(),
            url: undefined
        }
        render(<Reset {...props} />);
        expect(screen.queryByRole("button")).not.toBeInTheDocument();
    })
})