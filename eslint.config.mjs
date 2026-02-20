import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import studio from "@sanity/eslint-config-studio";

const studioFileGlobs = [
  "sanity/**/*.{js,mjs,cjs,jsx,ts,tsx}",
  "sanity.config.ts",
  "sanity.cli.ts",
];

const nextConfig = [...nextCoreWebVitals, ...nextTypescript].map((config) => ({
  ...config,
  ignores: [...(config.ignores ?? []), ...studioFileGlobs],
}));

const studioConfig = studio.map((config) =>
  config.ignores ? config : { ...config, files: studioFileGlobs },
);

const eslintConfig = [...nextConfig, ...studioConfig];

export default eslintConfig;
