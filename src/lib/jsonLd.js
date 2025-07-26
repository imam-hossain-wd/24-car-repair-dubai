// lib/jsonLd.js
'use client'; // This can be a Client Component as it directly interacts with the DOM (via next/script)

import Script from 'next/script'; // Import Next.js Script component
import React from 'react'; // React is implicitly needed for JSX

/**
 * Renders a <script type="application/ld+json"> tag for JSON-LD structured data.
 *
 * @param {object} props - Component props.
 * @param {object} props.data - The JSON-LD object to serialize and embed.
 * @returns {JSX.Element} A Next.js Script component with the JSON-LD data.
 */
export function JsonLd({ data }) {
  // Generate a unique ID for the script tag to prevent potential React warnings
  // and to help Next.js track the script. We make it safe for HTML id attributes.
  const scriptId = `json-ld-${data['@type'] || 'default'}-${data['@id'] ? data['@id'].replace(/[^a-zA-Z0-9]/g, '') : Math.random().toString(36).substring(7)}`;

  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      // dangerouslySetInnerHTML is used to inject the JSON-LD string as HTML content.
      // JSON.stringify converts your JavaScript object into a JSON string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      
      // 'lazyOnload' strategy: Load the script during browser idle time.
      // This is generally a good strategy for structured data as it's not
      // critical for the initial page render or user interaction, but important for SEO.
      // Other options include 'afterInteractive' (default) or 'beforeInteractive'
      // depending on script priority. For JSON-LD, 'lazyOnload' or 'afterInteractive' are fine.
      strategy="lazyOnload"
    />
  );
}