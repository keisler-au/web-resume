// this file is run once before and then is applied for entire test suite
// Mocking Third-Party Libraries: you can mock those here so they don't affect your test runs.
// Any global variables or mocks required across multiple test files can be initialized here.
// mock specific browser features like localStorage, fetch, or any other browser API
import "@testing-library/jest-dom";

global.fetch = jest.fn();

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));
