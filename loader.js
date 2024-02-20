'use client'

export default function myImageLoader({ src, width, quality }) {
    if(src.startsWith('http://images.pexels.com')) return src
    return `https://sheldonliangportfolio.com/${src}?w=${width}&q=${quality || 75}`
}