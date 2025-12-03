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

const contentDirectory = path.join(process.cwd(), 'src/content')

/**
 * Load markdown content from the content directory.
 * @param section - The content section (e.g., 'what-we-do', 'who-we-are')
 * @param slug - The page slug (e.g., 'pharmacy', 'nursing-hub')
 * @returns Parsed frontmatter and markdown content
 */
export function getMarkdownContent(section: string, slug: string): MarkdownContent {
  const filePath = path.join(contentDirectory, section, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as ContentFrontmatter,
    content,
  }
}

/**
 * Check if markdown content exists for a given section and slug.
 */
export function hasMarkdownContent(section: string, slug: string): boolean {
  const filePath = path.join(contentDirectory, section, `${slug}.md`)
  return fs.existsSync(filePath)
}

/**
 * Get all markdown files in a section.
 */
export function getContentSlugs(section: string): string[] {
  const sectionPath = path.join(contentDirectory, section)
  if (!fs.existsSync(sectionPath)) {
    return []
  }
  return fs
    .readdirSync(sectionPath)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}
