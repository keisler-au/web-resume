import { render, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Contact from "../components/Contact";
import { Description } from "../components/Descriptions";
import { BASE_URL } from "../constants";

const fetchMock = fetch as jest.Mock;

jest.mock("../components/CardLayout", () => ({
  TextLayout: () => <div></div>,
}));

describe("Contact Component", () => {
  const testDescriptions: Description[] = [
    { sections: [{ header: "test header", content: "test content" }] },
  ];

  it("renders the contact form with all fields", () => {
    const { getByText, getByLabelText } = render(
      <Contact description={testDescriptions} />,
    );

    expect(getByLabelText("name")).toBeInTheDocument();
    expect(getByLabelText("email")).toBeInTheDocument();
    expect(getByLabelText("message")).toBeInTheDocument();
    expect(getByText("fileUpload")).toBeInTheDocument();
    expect(getByText("send")).toBeInTheDocument();
  });

  it("shows validation errors when submitting an empty form", async () => {
    const { getByText } = render(<Contact description={testDescriptions} />);

    act(() => {
      userEvent.click(getByText("send"));
    });

    await waitFor(() => {
      expect(getByText("nameRequired")).toBeInTheDocument();
      expect(getByText("emailRequired")).toBeInTheDocument();
      expect(getByText("messageRequired")).toBeInTheDocument();
    });
  });

  it("submits the form successfully with valid data", async () => {
    const { getByText, getByLabelText } = render(
      <Contact description={testDescriptions} />,
    );

    const name = "Test name";
    const email = "test@addresscom";
    const message = "This is a test message";

    act(() => {
      userEvent.type(getByLabelText("name"), name);
      userEvent.type(getByLabelText("email"), email);
      userEvent.type(getByLabelText("message"), message);

      userEvent.click(getByText("send"));
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
    const { getByText, getByLabelText } = render(
      <Contact description={testDescriptions} />,
    );
    act(() => {
      userEvent.type(getByLabelText("name"), "Test name");
      userEvent.type(getByLabelText("email"), "test@addresscom");
      userEvent.type(getByLabelText("message"), "This is a test message");
    });

    const input = getByLabelText("fileUpload");
    const files = [
      new File(["hello"], "hello.png", { type: "image/png" }),
      new File(["there"], "there.png", { type: "image/png" }),
    ];

    act(() => {
      userEvent.upload(input, files);
      userEvent.click(getByText("send"));
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
