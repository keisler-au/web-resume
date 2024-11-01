import { render, screen, fireEvent } from "@testing-library/react";

import Contact from "../components/Contact";

describe("Contact", () => {
  it("renders the form", () => {
    render(<Contact />);
    expect(screen.getByLabelText("name")).toBeInTheDocument();
    expect(screen.getByLabelText("email")).toBeInTheDocument();
    expect(screen.getByLabelText("message")).toBeInTheDocument();
    expect(screen.getByLabelText("uploadFile")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "send" })).toBeInTheDocument();
  });

  it("shows validation messages", async () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: "send" }));

    expect(await screen.findByText("name is required")).toBeInTheDocument();
    expect(await screen.findByText("email is required")).toBeInTheDocument();
    expect(await screen.findByText("message is required")).toBeInTheDocument();
  });

  // Additional tests for successful submission and file upload can be added here
});
