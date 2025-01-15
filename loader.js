"use client";

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com")) {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality || 75}`;
  }
  return `./${src}?w=${width}&q=${quality || 75}`;
}
