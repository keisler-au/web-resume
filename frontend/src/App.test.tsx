import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App";
import { ErrorFallback } from "./components/Errors";
import { routesConfig } from "./constants";

describe("App Component", () => {
  test("renders NavBar and routes", async () => {
    const { getByText } = render(<App />);

    expect(getByText(/Josh Kisler/i)).toBeInTheDocument();
    expect(getByText(/web Resume/i)).toBeInTheDocument();

    routesConfig.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(getByText("Weather App"));
    });

    const weatherPage = await screen.findByText(/Weather App page/i);
    expect(weatherPage).toBeInTheDocument();
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

    expect(getByText(/Something went wrong/i)).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });
});
