import ReactMarkdown from 'react-markdown'
import styles from './MarkdownContent.module.scss'

interface MarkdownContentProps {
  /** The markdown content string to render */
  content: string
  /** The page title (h1) */
  title: string
  /** Optional CSS class name for the container */
  className?: string
}

interface Section {
  heading: string
  content: string
}

/**
 * Split markdown content into sections by h2 headings.
 */
function splitIntoSections(markdown: string): Section[] {
  const lines = markdown.split('\n')
  const sections: Section[] = []
  let currentHeading = ''
  let currentContent: string[] = []

  for (const line of lines) {
    if (line.startsWith('## ')) {
      // Save previous section if exists
      if (currentHeading) {
        sections.push({
          heading: currentHeading,
          content: currentContent.join('\n').trim(),
        })
      }
      currentHeading = line.replace('## ', '')
      currentContent = []
    } else if (currentHeading) {
      currentContent.push(line)
    }
  }

  // Save last section
  if (currentHeading) {
    sections.push({
      heading: currentHeading,
      content: currentContent.join('\n').trim(),
    })
  }

  return sections
}

/**
 * Renders markdown content with proper styling for service/content pages.
 * Splits content by h2 headings and wraps each in a styled section.
 */
export function MarkdownContent({ content, title, className }: MarkdownContentProps) {
  const sections = splitIntoSections(content)

  return (
    <div className={`${styles.markdownContent} ${className || ''}`}>
      <h1>{title}</h1>
      {sections.map((section, index) => (
        <section key={index} className={styles.section}>
          <h2>{section.heading}</h2>
          <ReactMarkdown>{section.content}</ReactMarkdown>
        </section>
      ))}
    </div>
  )
}
