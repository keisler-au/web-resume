// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { act } from "react";

// import { Description } from "../components/Descriptions";
// import SelfTaught from "../components/SelfTaught";

// jest.mock("../components/CardLayout", () => ({
//   TextLayout: () => <div></div>,
// }));

// describe("WeatherApp", () => {
//   let iframe: HTMLElement;
//   const testDescription: Description[] = [
//     { sections: [{ header: "test header", content: "test content" }] },
//   ];

//   beforeEach(() => {
//     jest.useFakeTimers();
//     render(<SelfTaught description={testDescription} src="someSource" />);
//     iframe = screen.getByTitle("embeddedWeatherApp"); // Assign iframe here
//   });
//   afterEach(() => {
//     jest.clearAllTimers();
//   });

//   it("displays loading indicator initially", () => {
//     expect(iframe).toHaveStyle("display: none");
//     expect(screen.getByText("loadingContent...")).toBeInTheDocument();
//   });

//   it("displays error message on loading timeout", async () => {
//     act(() => {
//       jest.advanceTimersByTime(6000);
//     });
//     await waitFor(() => {
//       expect(iframe).toHaveStyle("display: none");
//       expect(screen.getByText("failedLoad...")).toBeInTheDocument();
//     });
//   });

//   it("displays iframe on successful load", async () => {
//     fireEvent.load(iframe);
//     expect(iframe).toHaveStyle("display: block");
//   });
// });
