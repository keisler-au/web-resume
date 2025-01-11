const BASE_URL: string =
  process.env.NODE_ENV === "production"
    ? "https://joshkeisler.com"
    : "http://localhost:8000";

const GITHUB_URL = "github.com/keisler-au/";
const LINKEDIN_URL = "in/josh-keisler-software-development";
const PHONE_NUMBER = "+31 617 044 763";
const EMAIL_ADDRESS = "joshkeisler.au@gmail.com";

export { BASE_URL, GITHUB_URL, EMAIL_ADDRESS, PHONE_NUMBER, LINKEDIN_URL };
