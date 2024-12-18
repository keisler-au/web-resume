export const BASE_URL: string =
  process.env.NODE_ENV === "production"
    ? "https://joshkeisler.com"
    : "http://localhost:8000";
