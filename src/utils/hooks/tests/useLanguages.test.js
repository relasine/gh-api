import { renderHook, act } from "@testing-library/react-hooks";
import useLanguages from "../useLanguages";

describe("useLanguages", () => {
  const _results = [
    { id: 1, language: "JavaScript" },
    { id: 2, language: "Python" },
    { id: 3, language: "Cobol" },
    { id: 4, language: "JavaScript" },
    { id: 5, language: "C" },
  ];

  it("should have default state", () => {
    const { result } = renderHook(() => useLanguages());

    expect(result.current.language).toEqual(null);
    expect(result.current.languages).toEqual(null);
  });

  it("should set language directly", () => {
    const { result } = renderHook(() => useLanguages());

    act(() => {
      result.current.setLanguage("C++");
    });

    const expected = "C++";

    expect(result.current.language).toEqual(expected);
  });

  it("should update language", () => {
    const _event = {
      target: {
        value: "test",
      },
    };
    const { result } = renderHook(() => useLanguages());

    act(() => {
      result.current.handleLanguageChange(_event);
    });

    const expected = "test";

    expect(result.current.language).toEqual(expected);
  });

  it("should update language to null", () => {
    const _event = {
      target: {
        value: "-",
      },
    };
    const { result } = renderHook(() => useLanguages());

    act(() => {
      result.current.setLanguage("test");
    });

    const expected = "test";
    expect(result.current.language).toEqual(expected);

    act(() => {
      result.current.handleLanguageChange(_event);
    });

    expect(result.current.language).toEqual(null);
  });

  it("should updateLanguages", () => {
    const { result } = renderHook(() => useLanguages(_results));

    const expected = ["JavaScript", "Python", "Cobol", "C"];

    expect(result.current.languages).toStrictEqual(expected);
  });
});
