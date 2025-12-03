import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentFrontmatter {
  title: string
  description: string
}

export interface MarkdownContent {
  frontmatter: ContentFrontmatter
  content: string
}

/**
 * Load markdown content from a file path.
 * @param filePath - Path to the markdown file (relative to project root or absolute)
 * @returns Parsed frontmatter and markdown content
 */
export function getMarkdownContent(filePath: string): MarkdownContent {
  const fullPath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as ContentFrontmatter,
    content,
  }
}
