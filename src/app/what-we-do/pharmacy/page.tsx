import type { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'
import { MarkdownContent } from '@/components/MarkdownContent'
import styles from '../service.module.scss'

const { frontmatter, content } = getMarkdownContent('src/app/what-we-do/pharmacy/content.md')

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
}

export default function PharmacyPage() {
  return (
    <MarkdownContent
      title={frontmatter.title}
      content={content}
      className={styles.servicePage}
    />
  )
}
