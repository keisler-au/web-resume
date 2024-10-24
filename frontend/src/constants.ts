export const BASE_URL: string =
  process.env.NODE_ENV === "production"
    ? "https://domain.com"
    : "http://localhost:8000";

export const pageReferences: { [key: string]: number } = {
  home: 1,
  infosys: 2,
};
