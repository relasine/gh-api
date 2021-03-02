import { renderHook, act } from "@testing-library/react-hooks";
import useSearchRepos from "../useSearchRepos";
import octokit from "../../makeOctokit";

describe("useSearchRepos", () => {
  jest.spyOn(octokit, "request").mockResolvedValue({
    data: { items: ["one", "two"] },
  });

  beforeEach(() => {
    jest.clearAllMocks();

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it("should have default state", () => {
    const { result } = renderHook(() => useSearchRepos());

    expect(result.current.results).toEqual(null);
    expect(result.current.status).toEqual("ready");
    expect(result.current.query).toEqual(null);
    expect(result.current.sort).toEqual("best-match");
  });

  it("should setSort", () => {
    const { result } = renderHook(() => useSearchRepos());
    const _event = {
      target: {
        value: "test value",
      },
    };

    act(() => result.current.handleSortChange(_event));

    expect(result.current.sort).toEqual("test value");
  });

  it("should set localStorage into state", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn().mockReturnValue(
          JSON.stringify({
            query: "mock-query",
            results: ["one", "two", "three", "four"],
            sort: "best-match",
          })
        ),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    const { result } = renderHook(() => useSearchRepos());

    act(() => result.current.setQuery("mock-query"));

    const expected = ["one", "two", "three", "four"];

    expect(expected).toStrictEqual(expected);
    expect(result.current.status).toEqual("success");
  });

  it("should call request", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearchRepos());

    act(() => result.current.setQuery("mock-query"));

    await waitForNextUpdate();

    const expected = ["one", "two"];

    expect(result.current.results).toStrictEqual(expected);
  });

  it("should set response into localStorage", async () => {
    const setItem = jest.fn();
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem,
      },
      writable: true,
    });

    const { result, waitForNextUpdate } = renderHook(() => useSearchRepos());

    act(() => result.current.setQuery("mock-query"));

    await waitForNextUpdate();

    const expected = JSON.stringify({
      results: ["one", "two"],
      query: "mock-query",
      sort: "best-match",
    });

    expect(setItem).toHaveBeenCalledWith("gh-results", expected);
  });

  it("should set status to success", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearchRepos());

    act(() => result.current.setQuery("mock-query"));

    await waitForNextUpdate();

    expect(result.current.status).toEqual("success");
  });

  it("should set an error in state", async () => {
    jest.spyOn(octokit, "request").mockRejectedValue("error");
    const { result, waitForNextUpdate } = renderHook(() => useSearchRepos());

    act(() => result.current.setQuery("mock-query"));

    await waitForNextUpdate();

    expect(result.current.status).toEqual("error");
  });
});
