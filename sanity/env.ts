export const apiVersion = "2025-03-06";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const viewerToken = assertValue(
  process.env.NEXT_PUBLIC_SANITY_VIEWER_TOKEN,
  "Missing environment variable: NEXT_PUBLIC_SANITY_VIEWER_TOKEN"
);

export const studioUrl = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_URL"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
