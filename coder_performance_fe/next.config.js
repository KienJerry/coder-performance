import i18nConfig from "./i18n.config.js";

const i18n = i18nConfig.i18n;
const nextConfig = {
  images: {
    domains: ["zozo.vn", "example.com"],
  },
  trailingSlash: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      // Tắt các plugin
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
  i18n,
};

export default nextConfig;
