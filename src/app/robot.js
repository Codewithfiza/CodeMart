import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart/", "/checkout/", "/order-confirmed/"],
    },
    sitemap: "https://code-mart-five.vercel.app/sitemap.xml",
  };
}