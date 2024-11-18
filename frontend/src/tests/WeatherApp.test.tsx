import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";

import WeatherApp from "../components/SelfTaught";

describe("WeatherApp", () => {
  let iframe: HTMLElement;

  beforeEach(() => {
    jest.useFakeTimers();
    render(<WeatherApp src="someSource" />);
    iframe = screen.getByTitle("embeddedWeatherApp"); // Assign iframe here
  });
  afterEach(() => {
    jest.clearAllTimers();
  });

  it("displays loading indicator initially", () => {
    expect(iframe).toHaveStyle("display: none");
    expect(screen.getByText("loadingContent...")).toBeInTheDocument();
  });

  it("displays error message on loading timeout", async () => {
    act(() => {
      jest.advanceTimersByTime(6000);
    });
    await waitFor(() => {
      expect(iframe).toHaveStyle("display: none");
      expect(screen.getByText("failedLoad...")).toBeInTheDocument();
    });
  });

  it("displays iframe on successful load", async () => {
    fireEvent.load(iframe);
    expect(iframe).toHaveStyle("display: block");
  });
});
