import { render } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";

import App from "../App";
import { ErrorFallback } from "../components/Errors";

describe("App Component", () => {
  test("renders NavBar and routes", async () => {
    const { getByText } = render(<App />);

    expect(getByText("joshKeisler")).toBeInTheDocument();
    expect(getByText("webResume")).toBeInTheDocument();
    expect(getByText("home")).toBeInTheDocument();
    expect(getByText("weatherApp")).toBeInTheDocument();
    expect(getByText("infosysBHP")).toBeInTheDocument();
  });

  test("renders ErrorBoundary", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const ThrowError = () => {
      throw new Error("Test error");
    };

    const { getByText } = render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(getByText("error")).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });
});
