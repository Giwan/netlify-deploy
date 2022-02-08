import { hasUrl } from "../componentHelpers";

describe("has url", () => {
    it("should confirm if there is a url already", () => {
        expect(hasUrl()).toBeTruthy();
        expect(hasUrl("iframe.html")).toBeTruthy();
        expect(hasUrl("https://mytoori.com")).toBeFalsy();
    });
});