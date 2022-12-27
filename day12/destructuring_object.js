let ref = {
  name: "my-app",
  version: "0.1.0",
  private: true,
  dependencies: {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
  },
  scripts: {
    start: "react-scripts start",
    build: "react-scripts build",
    test: "react-scripts test",
    eject: "react-scripts eject",
  },
  eslintConfig: {
    extends: ["react-app", "react-app/jest"],
  },
  browserslist: {
    production: [">0.2%", "not dead", "not op_mini all"],
    development: [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
    ],
  },
};

// let name = ref.name;
//let private = ref.private;
let version = ref.version;
console.log(version);

// destructing of object literals
let { name, private, city, scripts } = ref;
console.log(name, scripts);

// IMPORT
// import { name, private, city, scripts } from "ref";

let ref1 = { id: 1, names: "react", versions: "0.1.0" };

let { id, names, versions } = ref1;
console.log(id, names, version);
