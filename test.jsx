const React = require("react");
const TLR = require("@testing-library/react");
require("@testing-library/jest-dom");

const Survey = require('surveyjs-react');
const json = {
  questions: [{
    type: "checkbox",
    name: "car",
    title: "What car are you driving?",
    noneText: "None of the above",
    choices: [
      "Ford",
      "Tesla",
      "Vauxhall",
      "Volkswagen",
    ]
  }]
};

describe("basic test", () => {
  test("this produces a bunch of warnings", () => {
    TLR.render(<Survey.Survey json={ json} reactId="foo" />);
  });
});
