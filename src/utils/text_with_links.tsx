import React from 'react';

/**
 * Converts a string with markdown-style links [text](url) into JSX with proper anchor tags.
 * Also supports line breaks using \n or <br/> tags.
 * 
 * @param text - The text string that may contain markdown-style links [text](url)
 * @param linkClassName - Optional CSS class for links (defaults to theme accent color with underline)
 * @returns React.ReactNode with parsed links and line breaks
 * 
 * @example
 * textWithLinks("Check out [my website](https://example.com) for more info.")
 * // Returns JSX with a clickable link
 * 
 * @example
 * textWithLinks("Line 1\nLine 2")
 * // Returns JSX with line breaks
 */
export function textWithLinks(
  text: string,
  linkClassName: string = 'text-[var(--accent)] hover:underline'
): React.ReactNode {
  // Split by line breaks first
  const parts: React.ReactNode[] = [];
  const lines = text.split(/\n|<br\s*\/?>/i);
  
  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      parts.push(<br key={`br-${lineIndex}`} />);
    }
    
    // Match markdown-style links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;
    let keyCounter = 0;
    
    while ((match = linkRegex.exec(line)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(
          <React.Fragment key={`text-${lineIndex}-${keyCounter++}`}>
            {line.substring(lastIndex, match.index)}
          </React.Fragment>
        );
      }
      
      // Add the link
      const linkText = match[1];
      const linkUrl = match[2];
      parts.push(
        <a
          key={`link-${lineIndex}-${keyCounter++}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {linkText}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after the last link
    if (lastIndex < line.length) {
      parts.push(
        <React.Fragment key={`text-${lineIndex}-${keyCounter++}`}>
          {line.substring(lastIndex)}
        </React.Fragment>
      );
    }
  });
  
  return <>{parts}</>;
}

/**
 * Alternative function that takes an array of link definitions for more control.
 * Useful when you want to define links separately from the text.
 * 
 * @param text - The text string with placeholders like {{0}}, {{1}}, etc.
 * @param links - Array of link objects with text and url
 * @param linkClassName - Optional CSS class for links
 * @returns React.ReactNode with parsed links
 * 
 * @example
 * textWithLinkPlaceholders(
 *   "Check out {{0}} for more info.",
 *   [{ text: "my website", url: "https://example.com" }]
 * )
 */
export function textWithLinkPlaceholders(
  text: string,
  links: Array<{ text: string; url: string }>,
  linkClassName: string = 'text-[var(--accent)] hover:underline'
): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyCounter = 0;
  
  // Match placeholders like {{0}}, {{1}}, etc.
  const placeholderRegex = /\{\{(\d+)\}\}/g;
  let match;
  
  while ((match = placeholderRegex.exec(text)) !== null) {
    // Add text before the placeholder
    if (match.index > lastIndex) {
      parts.push(
        <React.Fragment key={`text-${keyCounter++}`}>
          {text.substring(lastIndex, match.index)}
        </React.Fragment>
      );
    }
    
    // Add the link
    const linkIndex = parseInt(match[1], 10);
    const link = links[linkIndex];
    
    if (link) {
      parts.push(
        <a
          key={`link-${keyCounter++}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {link.text}
        </a>
      );
    } else {
      // Placeholder not found, keep the placeholder text
      parts.push(
        <React.Fragment key={`text-${keyCounter++}`}>
          {match[0]}
        </React.Fragment>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text after the last placeholder
  if (lastIndex < text.length) {
    parts.push(
      <React.Fragment key={`text-${keyCounter++}`}>
        {text.substring(lastIndex)}
      </React.Fragment>
    );
  }
  
  return <>{parts}</>;
}

