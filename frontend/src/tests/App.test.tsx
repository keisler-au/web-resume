import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ErrorBoundary } from "react-error-boundary";

import App from "../App";
import { ErrorFallback } from "../components/Errors";

describe("App Component", () => {
  test("renders NavBar and routes", async () => {
    const { getByText } = render(<App />);

    expect(getByText("joshKeisler")).toBeInTheDocument();
    expect(getByText("webResume")).toBeInTheDocument();
    expect(getByText("home")).toBeInTheDocument();
    expect(getByText("infosysBHP")).toBeInTheDocument();
    expect(getByText("rentalApp")).toBeInTheDocument();

    act(() => {
      userEvent.click(getByText("weatherApp"));
    });

    const weatherPage = await screen.findByText("Weather App page");
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

    expect(getByText("error")).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });
});
