# Github Repository Search Tool

### What is this application?

Github Repository Search Tool is a React application that allows you to search all Github repositories by keywords. Results can be sorted by best match or by the number of watchers (i.e. stars) the repo has. It is designed to be responsive for usage on mobile phones, tablets, and desktops.

### Getting started

1. Clone down the application repo: `git clone git@github.com:relasine/gh-api.git`
2. Navigate into the root of the directory: `cd gh-api`
3. Install dependencies: `npm install`
4. Start up the development server: `npm start`

### Running the test suite

To run the test suite, navigate into the repo's root and use `npm test`

### Site Component Structure

- `App`: manages search results and renders the `Hero`, `Routing`, and `Footer` components.
  - `Hero`: renders the application hero as well as the search `TextInput`.
  - `Footer`: renders a simple application footer.
  - `Routing`: renders `Route` components for `BasicPage - home`, `ResultsPage`, `DetailsPage`, and `ErrorPage - 404`.
    - `BasicPage`: simple page for rendering a header and a series of `<p>` elements.
    - `ResultsPage`: handles filtering for results and renders either `CardContainer`, `Loading`, `BasicPage - no results`. or `ErrorPage - 500`
      - `CardContainer`: iterates over results and renders them as `Card` components as well as the sort and filter `Select` components.
      - `Loading`: Renders a simple loading animation.
    - `DetailsPage`: locates the corresponding result object and renders it on the page.
  - `ErrorPage`: Provides some text and a `Link` to the home page.

### Technologies

- [React 17](https://www.reactjs.org)
- [React Hooks API](https://reactjs.org/docs/hooks-intro.html) - for `useState`, `useEffect`, `useCallback`, and `useContext`
- [React Router](https://reactjs.org/docs/hooks-intro.html)
- [SASS](https://sass-lang.com/)
- [Octokit Core](https://github.com/octokit/core.js/) - for Github API interaction
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Who I am

I am Kevin Simpson, a Frontend Engineer from Thornton, Colorado.

- [Personal Website](https://www.kevincodes.io/)
- [GitHub](https://github.com/relasine)
- [Twitter](https://twitter.com/relasine)
- [LinkedIn](https://www.linkedin.com/in/kevinjohnsimpson/)
