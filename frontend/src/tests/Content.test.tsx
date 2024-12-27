import { render, screen, waitFor } from "@testing-library/react";

import Content from "../components/Content";

const fetchMock = fetch as jest.Mock;

describe("Content", () => {
  const pageReference = "test";
  const mockRender = jest.fn();

  beforeEach(() => {
    fetchMock.mockClear();
  });

  test("renders loading state initially", () => {
    fetchMock.mockImplementationOnce(() => new Promise(() => {}));
    render(<Content render={mockRender} pageReference={pageReference} />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders error message when fetch is unsuccessful", async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    render(<Content render={mockRender} pageReference={pageReference} />);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "failedFetch",
      );
    });
  });

  test("renders content when fetch is successful", async () => {
    const mockContent = [
      { id: 1, content: "Description 1", pageReference },
      { id: 2, content: "Description 2", pageReference },
    ];

    fetchMock.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockContent),
      }),
    );

    render(<Content render={mockRender} pageReference={pageReference} />);

    await waitFor(() => {
      expect(mockRender).toBeCalledWith(mockContent);
    });
  });

  test("renders error message when fetch results in network error", async () => {
    fetchMock.mockImplementationOnce(() =>
      Promise.reject(new Error("Network Error")),
    );
    render(<Content render={mockRender} pageReference={pageReference} />);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "Network Error",
      );
    });
  });
});
