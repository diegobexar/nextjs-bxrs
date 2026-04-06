import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "izt9f0dq",
  dataset: "production",
  apiVersion: "2025-05-01",
  useCdn: true,
});
