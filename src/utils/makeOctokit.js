import { Octokit } from "@octokit/core";
const token = process.env.REACT_APP_GH_KEY;

// I do not like this implementation, but the Jest update has royally thrown a wrench in the works of normal mocking, so here we are //

const octokit = new Octokit({ auth: token });

export default octokit;
