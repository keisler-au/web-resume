import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import WeatherApp from "../components/WeatherApp";

describe("WeatherApp", () => {
  it("shows loading indicator initially", () => {
    render(<WeatherApp src="https://example.com" />);
    expect(screen.getByText(/loading content/i)).toBeInTheDocument();
  });

  it("displays error message if iframe fails to load", async () => {
    render(<WeatherApp src="invalid-url" />);

    // Simulate an error event
    const iframe = screen.getByTitle(/embedded content/i);
    fireEvent.error(iframe);

    await waitFor(() => {
      expect(screen.getByText(/failed to load content/i)).toBeInTheDocument();
    });
  });

  it("retries loading when retry button is clicked", async () => {
    render(<WeatherApp src="https://example.com" />);

    // Simulate an error event
    const iframe = screen.getByTitle(/embedded content/i);
    fireEvent.error(iframe);

    await waitFor(() => {
      expect(screen.getByText(/failed to load content/i)).toBeInTheDocument();
    });

    // Click retry button
    const retryButton = screen.getByText(/retry/i);
    fireEvent.click(retryButton);

    // Loading state should reappear
    expect(screen.getByText(/loading content/i)).toBeInTheDocument();
  });
});
