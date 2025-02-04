"use client";

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com")) {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality || 75}`;
  } else if (
    src.startsWith("https://digital-image-assets.s3.us-east-2.amazonaws.com")
  ) {
    return `${src}?w=${width}`;
  }
  return `./${src}?w=${width}&q=${quality || 75}`;
}
