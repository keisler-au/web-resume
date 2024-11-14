import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import Contact from "../components/Contact";
import { BASE_URL } from "../constants";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Contact Component", () => {
  it("renders the contact form with all fields", () => {
    const { getByText, getByLabelText } = render(<Contact />);

    // Check if form fields and buttons are rendered
    expect(getByLabelText("name")).toBeInTheDocument();
    expect(getByLabelText("email")).toBeInTheDocument();
    expect(getByLabelText("message")).toBeInTheDocument();
    expect(getByText("uploadFile")).toBeInTheDocument();
    expect(getByText("send")).toBeInTheDocument();
  });

  it("shows validation errors when submitting an empty form", async () => {
    const { getByText } = render(<Contact />);

    userEvent.click(getByText("send"));

    // Wait for validation errors to appear
    await waitFor(() => {
      expect(getByText("nameRequired")).toBeInTheDocument();
      expect(getByText("emailRequired")).toBeInTheDocument();
      expect(getByText("messageRequired")).toBeInTheDocument();
    });
  });

  it("submits the form successfully with valid data", async () => {
    const { getByText, getByLabelText } = render(<Contact />);

    userEvent.type(getByLabelText("name"), "John Doe");
    userEvent.type(getByLabelText("email"), "john@example.com");
    userEvent.type(getByLabelText("message"), "Hello, this is a message.");

    userEvent.click(getByText("send"));

    // Ensure the axios post was called with correct data
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        `${BASE_URL}/api/send_email/`,
        expect.any(FormData),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    });
  });

  it("allows file upload", async () => {
    const { getByText, getByLabelText } = render(<Contact />);

    userEvent.type(getByLabelText("name"), "John Doe");
    userEvent.type(getByLabelText("email"), "john@example.com");
    userEvent.type(getByLabelText("message"), "Hello, this is a message.");

    const fileInputElement = getByLabelText("uploadFile");
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    userEvent.upload(fileInputElement, file);

    userEvent.click(getByText("send"));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        `${BASE_URL}/api/send_email/`,
        expect.any(FormData),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      const formData = mockedAxios.post.mock.calls[0][1] as FormData;
      expect(formData.get("file")).toEqual(file);
    });
  });
});
