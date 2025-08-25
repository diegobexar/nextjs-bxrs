import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "izt9f0dq",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});