import { formatCurrency } from "./helpers";

describe("Валидация formatCurrency", () => {
    test("Значение >= 0", () => {
        expect(formatCurrency(10.5)).toBe("€10.50");
    });

    test("Значение < 0", () => {
        expect(formatCurrency("-107")).toBe(null);
    });

    test("Значение это строка, которую можно преобразовать в число", () => {
        expect(formatCurrency("7")).toBe("€7.00");
    });

    test("Значение это строка, которую нельзя преобразовать в число", () => {
        expect(formatCurrency("sajh")).toBe(null);
    });
});
