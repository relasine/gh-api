# Github Repository Search Tool

### What is this application?

Github Repository Search Tool is a React application that allows you to search all Github repositories by keywords. Results can be sorted by best match or by the number of watchers (i.e. stars) the repo has. It is designed to be responsive for usage on mobile phones, tablets, and desktops.

### Getting started

1. Clone down the application repo: `git clone https://github.com/relasine/gh-api.git`
2. Navigate into the root of the directory: `cd gh-api`
3. Install dependencies: `npm install`
4. Add a environment file: `touch .env`
5. You'll need a personal access token to use this application for accessing Github. Instructions on getting one can be found [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). When selecting permissions, just click the `repo` box. Copy the key; you'll need it for the next step.
6. Open your .env file and add this line of code: `REACT_APP_GH_KEY=key-goes-here`. It should look something like It should look something like `REACT_APP_GH_KEY=12345678910`. No quotes around the token.
7. Start up the development server: `npm start`

### Running the test suite

To run the test suite on usage of React Hooks, navigate into the repo's root and use `npm test`

### Some decisions I made on this project

There are a few decisions I made on this project that I think somewhat cut across the grain of the common wisdom of React and JavaScript. I wanted to take a minute to discuss a few of them.

##### Why Context?

The Context API is completely unnecessary on this project, but it's listed in the job description as required, and so I used it just to show that I could. I have historically reached for Redux to avoid prop drilling, but now that I've tried Context, I can see why people like it so much more.

##### Sorting and refreshing results

Switching between 'best-match' and 'stars' in the sort dropdown causes the application to call Github and completely refresh the results in state. This seems pretty silly on the surface since sorting in `CardContainer` would be way easier, but there are some issues with this approach, specifically that a default query to Github only returns the first 100 results that match the criteria.

If I were to query on best-match, then switch to sort without refreshing the results, there are potentially results that do not meet the top 100 of best-match criteria, but do have more stars than results that do match best-match criteria. Refreshing the results fixes this.

##### Why bother with the `makeOctokit` file?

Jest 26 broke the way that mocks have historically worked. I attempted the known easy fixes here, specifically adding the `resetMocks` configuration in `package.json`, but that wouldn't take. Using spys still works, but that required that I move the instantiation of Octokit into its own file.

##### localStorage

Since the Github API that was linked didn't list a way to query individual repos by their id, I needed a way to allow users to refresh the application while on the `DetailsPage` without having to backtrack to the `ResultsPage` and do a new search. It also added the benefit off stopping the need off having to fetch on Github for the same query string as the previous fetch.

### Site component structure

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

### Future Improvements

- Address the "flashing" that happens on the ResultsPage when it starts out consuming the data in state, then immediately loses that state when the call to Github kicks off.
- Dig more into the Github API so more data can be displayed
- Investigate a way to query Repos by their id for the `DetailsPage`
- Add component testing
- Clean up JSX on the DetailsPage
- Add ReactHelmet for site metadata, title, etc

### Who I am

I am Kevin Simpson, a Frontend Engineer from Thornton, Colorado.

- [Personal Website](https://www.kevincodes.io/)
- [GitHub](https://github.com/relasine)
- [Twitter](https://twitter.com/relasine)
- [LinkedIn](https://www.linkedin.com/in/kevinjohnsimpson/)
