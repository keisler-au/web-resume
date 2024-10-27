import { render, screen, waitFor } from "@testing-library/react";

import DescriptionList from "../components/Description";

describe("DescriptionList", () => {
  const pageReference = 1;

  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders loading state initially", () => {
    fetch.mockImplementationOnce(() => new Promise(() => {}));
    render(<DescriptionList pageReference={pageReference} />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders error message when fetch fails", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch")),
    );
    render(<DescriptionList pageReference={pageReference} />);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "Failed to fetch",
      );
    });
  });

  test("renders descriptions when fetch is successful", async () => {
    const mockDescriptions = [
      { id: 1, content: "Description 1", pageReference },
      { id: 2, content: "Description 2", pageReference },
    ];

    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockDescriptions),
      }),
    );

    render(<DescriptionList pageReference={pageReference} />);

    await waitFor(() => {
      expect(screen.getByText("Description 1")).toBeInTheDocument();
      expect(screen.getByText("Description 2")).toBeInTheDocument();
    });
  });

  test("handles fetch errors correctly", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    render(<DescriptionList pageReference={pageReference} />);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "failedFetch",
      );
    });
  });
});
