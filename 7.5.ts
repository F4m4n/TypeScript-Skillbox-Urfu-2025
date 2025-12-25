import { validateDate } from "./validateDate";

describe("validateDate()", () => {
    test("дата в прошлом - ошибка", () => {
        const result = validateDate("01.01.2000");
        expect(result.isValid).toBe(false);
        expect(result.error).toMatch(/раньше текущей/i);
    });

    test("буквы вместо цифр - ошибка", () => {
        const result = validateDate("aa.bb.cccc");
        expect(result.isValid).toBe(false);
    });

    test("спецсимволы в дате - ошибка", () => {
        const result = validateDate("12.@3.2025");
        expect(result.isValid).toBe(false);
        expect(result.error).toBeDefined();
    });

    test("правильная дата - ок", () => {
        const result = validateDate("12.03.2025");
        expect(result.isValid).toBe(true);
    });
});

import { validateCity } from "./validateCity";

describe("validateCity()", () => {
    test("теги < > - ошибка", () => {
        const result = validateCity("<script>");
        expect(result.isValid).toBe(false);
        expect(result.error).toBeDefined();
    });

    test("город из одной буквы - ок", () => {
        const result = validateCity("A");
        expect(result.isValid).toBe(true);
    });

    test("спецсимволы в названии - ок", () => {
        const result = validateCity("Ağrı");
        expect(result.isValid).toBe(true);
    });

    test("дефисы и ! в названии - ок", () => {
        const result = validateCity("Saint-Louis-du-Ha! Ha!");
        expect(result.isValid).toBe(true);
    });
});