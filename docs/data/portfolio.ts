export type PortfolioItem = {
  title: string
  subtitle?: string
  role?: string
  year?: string
  tags?: string[]
  cover: string
  video?: string
  videoEmbed?: string
  url?: string
  description?: string
}

type ArchiveDocMeta = {
  title?: string
  description?: string
  cover?: string
}

const archiveDocs = import.meta.glob('../portfolio-archive/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>

const fallbackCover = '/portfolio/technical-systems.png'

const toTitle = (slug: string): string =>
  slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const parseArchiveDoc = (raw: string): ArchiveDocMeta => {
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/)
  const frontmatterBlock = frontmatterMatch?.[1] ?? ''

  const getFrontmatterValue = (key: string): string | undefined => {
    const match = frontmatterBlock.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))
    const value = match?.[1]?.trim()

    if (!value) {
      return undefined
    }

    return value.replace(/^['\"]|['\"]$/g, '')
  }

  const imageMatch = raw.match(/!\[[^\]]*\]\(([^)]+)\)/)

  return {
    title: getFrontmatterValue('title'),
    description: getFrontmatterValue('description'),
    cover: imageMatch?.[1]
  }
}

export const houdini: PortfolioItem[] = Object.entries(archiveDocs)
  .map(([path, raw]) => {
    const slugMatch = path.match(/portfolio-archive\/(.+)\.md$/)
    const slug = slugMatch?.[1]

    if (!slug) {
      return null
    }

    const { title, description, cover } = parseArchiveDoc(raw)

    return {
      title: title || toTitle(slug),
      cover: cover || fallbackCover,
      url: `/portfolio-archive/${slug}`,
      description
    } satisfies PortfolioItem
  })
  .filter((item): item is PortfolioItem => item !== null)
  .sort((a, b) => a.title.localeCompare(b.title))
