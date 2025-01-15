import { render, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Contact from "../components/Contact";
import { BASE_URL } from "../constants";

const fetchMock = fetch as jest.Mock;

describe("Contact Component", () => {
  const data = {
    heading: [{ main_heading: "", description: "" }],
    body: [
      { label: "", cards: [{ title: "", content: [{ description: "" }] }] },
    ],
  };
  it("renders the contact form with all fields", () => {
    const { getByText, getByLabelText } = render(<Contact data={data} />);

    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Message")).toBeInTheDocument();
    expect(getByText("No Files Uploaded")).toBeInTheDocument();
    expect(getByText("Send")).toBeInTheDocument();
  });

  it("shows validation errors when submitting an empty form", async () => {
    const { getByText } = render(<Contact data={data} />);

    act(() => {
      userEvent.click(getByText("Send"));
    });

    await waitFor(() => {
      expect(getByText("Name is required")).toBeInTheDocument();
      expect(getByText("Email is required")).toBeInTheDocument();
      expect(getByText("Message is required")).toBeInTheDocument();
    });
  });

  it("submits the form successfully with valid data", async () => {
    const { getByText, getByLabelText } = render(<Contact data={data} />);

    const name = "Test name";
    const email = "test@addresscom";
    const message = "This is a test message";

    act(() => {
      userEvent.type(getByLabelText("Name"), name);
      userEvent.type(getByLabelText("Email"), email);
      userEvent.type(getByLabelText("Message"), message);

      userEvent.click(getByText("Send"));
    });

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/api/send_email/`, {
        method: "POST",
        body: expect.any(FormData),
      });

      const formData = fetchMock.mock.calls[0][1].body as FormData;
      expect(formData.get("name")).toEqual(name);
      expect(formData.get("email")).toEqual(email);
      expect(formData.get("message")).toEqual(message);
    });
  });

  it("allows file upload", async () => {
    const { getByText, getByLabelText } = render(<Contact data={data} />);
    act(() => {
      userEvent.type(getByLabelText("Name"), "Test name");
      userEvent.type(getByLabelText("Email"), "test@addresscom");
      userEvent.type(getByLabelText("Message"), "This is a test message");
    });

    const input = getByLabelText("No Files Uploaded");
    const files = [
      new File(["hello"], "hello.png", { type: "image/png" }),
      new File(["there"], "there.png", { type: "image/png" }),
    ];

    act(() => {
      userEvent.upload(input, files);
      userEvent.click(getByText("Send"));
    });

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/api/send_email/`, {
        method: "POST",
        body: expect.any(FormData),
      });

      const formDataFiles = (
        fetchMock.mock.calls[0][1].body as FormData
      ).getAll("files") as File[];
      expect(formDataFiles[0].name).toBe(files[0].name);
      expect(formDataFiles[1].name).toBe(files[1].name);
    });
  });
  // TODO: test statusMessage pathways
});
