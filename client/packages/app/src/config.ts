import packageJson from "../package.json";

console.log(process.env.REACT_APP_GRAPH_URI);

export const APP_VERSION = packageJson.version;
// export const GRAPH_URI = process.env.REACT_APP_GRAPH_URI;

export const GRAPH_URI = "http://localhost:5000/graphql";
