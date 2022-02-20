import { filterUrl } from "../utils";

describe("filterUrl", () => {
    it("should filter the url", () => {
        expect(filterUrl("https://mytoori.com")).toBe("mytoori.com");
        expect(filterUrl("https://mytoori.com")).not.toBe("https://mytoori.com");
        expect(filterUrl("")).toBe("");
        expect(filterUrl()).toBe();
    })
})