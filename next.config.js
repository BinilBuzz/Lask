/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.asparksys.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_BASE_URL: "https://dev.lask.asparksys.cloud/api",
  },
};

module.exports = nextConfig;
