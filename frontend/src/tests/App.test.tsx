import { render } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";

import App, { ErrorFallback } from "../App";

describe("App Component", () => {
  test("renders NavBar and routes", async () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText("joshKeisler")).toHaveLength(1);
    expect(getAllByText("psychology")).toHaveLength(2);
    expect(getAllByText("selfTaught")).toHaveLength(2);
    expect(getAllByText("workExperience")).toHaveLength(2);
    expect(getAllByText("webResume")).toHaveLength(2);
    expect(getAllByText("contact")).toHaveLength(2);
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
