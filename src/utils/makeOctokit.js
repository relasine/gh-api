import { Octokit } from "@octokit/core";
import token from "./token";

// I do not like this implementation, but the Jest update has royally thrown a wrench in the works of normal mocking, so here we are //

const octokit = new Octokit({ auth: token });

export default octokit;
