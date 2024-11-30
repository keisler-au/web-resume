// import { render, screen, waitFor } from "@testing-library/react";

// import DescriptionList from "../components/Description";

// const fetchMock = fetch as jest.Mock;

// describe("DescriptionList", () => {
//   const pageReference = "test";

//   beforeEach(() => {
//     fetchMock.mockClear();
//   });

//   test("renders loading state initially", () => {
//     fetchMock.mockImplementationOnce(() => new Promise(() => {}));
//     render(<DescriptionList pageReference={pageReference} />);

//     expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
//   });

//   test("renders error message when fetch is unsuccessful", async () => {
//     fetchMock.mockImplementationOnce(() =>
//       Promise.resolve({
//         ok: false,
//       }),
//     );

//     render(<DescriptionList pageReference={pageReference} />);

//     await waitFor(() => {
//       expect(screen.getByTestId("error-message")).toHaveTextContent(
//         "failedFetch",
//       );
//     });
//   });

//   test("renders descriptions when fetch is successful", async () => {
//     const mockDescriptions = [
//       { id: 1, content: "Description 1", pageReference },
//       { id: 2, content: "Description 2", pageReference },
//     ];

//     fetchMock.mockImplementationOnce(() =>
//       Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockDescriptions),
//       }),
//     );

//     render(<DescriptionList pageReference={pageReference} />);

//     await waitFor(() => {
//       expect(screen.getByText("Description 1")).toBeInTheDocument();
//       expect(screen.getByText("Description 2")).toBeInTheDocument();
//     });
//   });

//   test("renders error message when fetch results in network error", async () => {
//     fetchMock.mockImplementationOnce(() =>
//       Promise.reject(new Error("Network Error")),
//     );
//     render(<DescriptionList pageReference={pageReference} />);

//     await waitFor(() => {
//       expect(screen.getByTestId("error-message")).toHaveTextContent(
//         "Network Error",
//       );
//     });
//   });
// });
export {};
