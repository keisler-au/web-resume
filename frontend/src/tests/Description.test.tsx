import { render, screen, waitFor } from "@testing-library/react";

import Descriptions from "../components/Descriptions";

const fetchMock = fetch as jest.Mock;

describe("Descriptions", () => {
  const pageReference = "test";
  const mockRender = jest.fn();

  beforeEach(() => {
    fetchMock.mockClear();
  });

  test("renders loading state initially", () => {
    fetchMock.mockImplementationOnce(() => new Promise(() => {}));
    render(<Descriptions render={mockRender} pageReference={pageReference} />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders error message when fetch is unsuccessful", async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    render(<Descriptions render={mockRender} pageReference={pageReference} />);

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

    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockDescriptions),
      }),
    );

    render(<Descriptions render={mockRender} pageReference={pageReference} />);

    await waitFor(() => {
      expect(mockRender).toBeCalledWith(mockDescriptions);
    });
  });

  test("renders error message when fetch results in network error", async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.reject(new Error("Network Error")),
    );
    render(<Descriptions render={mockRender} pageReference={pageReference} />);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "Network Error",
      );
    });
  });
});
