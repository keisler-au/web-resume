import { render, screen, waitFor } from "@testing-library/react";

import DescriptionList from "../components/Description";

describe("DescriptionList", () => {
  const pageReference = 1;

  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test("renders loading state initially", () => {
    (fetch as jest.Mock).mockImplementationOnce(() => new Promise(() => {}));
    render(<DescriptionList pageReference={pageReference} />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders error message when fetch is unsuccessful", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
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

  test("renders descriptions when fetch is successful", async () => {
    const mockDescriptions = [
      { id: 1, content: "Description 1", pageReference },
      { id: 2, content: "Description 2", pageReference },
    ];

    (fetch as jest.Mock).mockImplementationOnce(() =>
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

  test("renders error message when fetch results in network error", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Network Error")),
    );
    render(<DescriptionList pageReference={pageReference} />);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "Network Error",
      );
    });
  });
});
