import { renderHook, act } from "@testing-library/react-hooks";
import useDetails from "../useDetails";

describe("useDetails", () => {
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

  const _push = jest.fn();

  const _results = [
    {
      name: "Repo 1",
      owner: { login: "Kevin", html_url: "www.kevin-test.com" },
      html_url: "www.repo.com",
      avatar_url: "www.ava-1.com",
      description: "Description One",
      language: "JavaScript",
      stars: 4,
      id: 1234,
      forks: 10,
      issues_url: "www.issues-1.com",
      homepage: "www.homepage-1.com",
      forkedApplication: false,
      defaultBranch: "master",
      archived: false,
      openIssues: 2,
    },
    {
      name: "Repo 2",
      owner: { login: "Brian", html_url: "www.brian-test.com" },
      html_url: "www.repo-2.com",
      avatar_url: "www.ava-2.com",
      description: "Description Two",
      language: "Ruby",
      stars: 2,
      id: 134,
      forks: 1,
      issues_url: "www.issues-2.com",
      homepage: "www.homepage-2.com",
      forkedApplication: false,
      defaultBranch: "main",
      archived: false,
      openIssues: 1,
    },
    {
      name: "Repo 3",
      owner: { login: "Stacy", html_url: "www.stacy-test.com" },
      html_url: "www.repo.com",
      avatar_url: "www.ava-3.com",
      description: "Description Three",
      language: "Cobol",
      stars: 2,
      id: 123,
      forks: 12,
      issues_url: "www.issues-3.com",
      homepage: "www.homepage-3.com",
      forkedApplication: false,
      defaultBranch: "master",
      archived: true,
      openIssues: 0,
    },
  ];

  const _matchOne = {
    params: {
      id: "123",
    },
  };

  const _matchTwo = {
    params: {
      id: "12",
    },
  };

  const _history = {
    push: _push,
  };

  it("should have default state", () => {
    const { result } = renderHook(() => useDetails());

    expect(result.current.repo).toEqual(null);
    expect(result.current.noMatchInState).toEqual(null);
    expect(result.current.storageChecked).toEqual(false);
  });

  it("should set noMatchInState", () => {
    const { result } = renderHook(() =>
      useDetails(_results, _matchTwo, _history)
    );

    expect(result.current.noMatchInState).toEqual(true);
  });

  it("should set a repo", () => {
    const { result } = renderHook(() =>
      useDetails(_results, _matchOne, _history)
    );

    const expected = {
      repoName: "Repo 3",
      ownerName: "Stacy",
      ownerURL: "www.stacy-test.com",
      repoURL: "www.repo.com",
      avatarURL: undefined,
      description: "Description Three",
      language: "Cobol",
      stars: undefined,
      repoID: 123,
      forks: 12,
      issuesURL: "www.issues-3.com",
      homepage: "www.homepage-3.com",
      forkedApplication: undefined,
      defaultBranch: undefined,
      archived: true,
      openIssues: undefined,
    };

    expect(result.current.noMatchInState).toEqual(false);
    expect(result.current.repo).toStrictEqual(expected);
  });

  it("should call history.push()", () => {
    const { result } = renderHook(() => useDetails(null, null, _history));

    act(() => result.current.setNoMatchInState(true));

    expect(_push).toHaveBeenCalledWith("/");
  });

  it("should call history.push() with results", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest
          .fn()
          .mockReturnValue(JSON.stringify({ results: _results })),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    const { result } = renderHook(() => useDetails(null, null, _history));

    act(() => {
      result.current.setNoMatchInState(true);
    });

    expect(_push).toHaveBeenCalledWith("/");
  });

  it("should set repo from localStorage", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest
          .fn()
          .mockReturnValue(JSON.stringify({ results: _results })),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    const { result } = renderHook(() => useDetails(null, _matchOne, _history));

    act(() => {
      result.current.setNoMatchInState(true);
    });

    const expected = {
      repoName: "Repo 3",
      ownerName: "Stacy",
      ownerURL: "www.stacy-test.com",
      repoURL: "www.repo.com",
      avatarURL: undefined,
      description: "Description Three",
      language: "Cobol",
      stars: undefined,
      repoID: 123,
      forks: 12,
      issuesURL: "www.issues-3.com",
      homepage: "www.homepage-3.com",
      forkedApplication: undefined,
      defaultBranch: undefined,
      archived: true,
      openIssues: undefined,
    };

    expect(result.current.repo).toStrictEqual(expected);
    expect(result.current.storageChecked).toEqual(true);
  });
});
