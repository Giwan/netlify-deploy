import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Browser from "../Browser";

describe("Browser", () => {
    const props = {
        setIframeUrl: jest.fn(),
        iframeUrl: "https://some-url.com"
    }

    beforeEach(() => {
        render(<Browser {...props} />);
    });

    afterEach(() => {
        props.setIframeUrl.mockReset();
    })

    it('should render and allow urls to be entered', () => {
        
        const urlInput = screen.queryByTitle("enter a valid URL here to load it into the iframe below");
        expect(urlInput).toBeInTheDocument();
        expect(urlInput.value).toBe(props.iframeUrl);
        userEvent.clear(urlInput);

        const newUrl = "https://mytoori.com"

        userEvent.type(urlInput, newUrl);
        expect(urlInput.value).toBe(newUrl);
        userEvent.type(urlInput, "{enter}");
        expect(props.setIframeUrl).toHaveBeenCalledWith(newUrl);

        userEvent.clear(urlInput);
        userEvent.type(urlInput, "phys.org");
        userEvent.type(urlInput, "{enter}");
        expect(urlInput.value).toEqual("https://phys.org");

    })

    it("should have a go button", () => {
        const goButton = screen.queryByTitle("Load url");
        expect(goButton).toBeInTheDocument();
        fireEvent.click(goButton);
        expect(props.setIframeUrl).toHaveBeenCalledWith(props.iframeUrl);
        const urlInput = screen.queryByTitle("enter a valid URL here to load it into the iframe below");
        const newUrl = "https://mytoori.com";
        userEvent.clear(urlInput);
        userEvent.type(urlInput, newUrl);
        fireEvent.click(goButton);
        expect(props.setIframeUrl).toHaveBeenCalledWith(newUrl);
    })
})