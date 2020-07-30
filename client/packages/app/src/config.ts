import packageJson from "../package.json";

export const APP_VERSION = packageJson.version;
export const GRAPH_URI = process.env.REACT_APP_GRAPH_URI;
