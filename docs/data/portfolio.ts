export type PortfolioItem = {
  title: string
  category?: string
  categoryOrder?: number
  order?: number
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
  category?: string
  categoryOrder?: number
  order?: number
}

type ParsedArchiveDoc = {
  data: ArchiveDocMeta
  content: string
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

const unwrapQuoted = (value: string): string => {
  const trimmed = value.trim()

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }

  return trimmed
}

const parseFrontmatter = (raw: string): { frontmatter: Record<string, string>; content: string } => {
  const lines = raw.split(/\r?\n/)

  if (lines[0]?.trim() !== '---') {
    return {
      frontmatter: {},
      content: raw
    }
  }

  const endIndex = lines.slice(1).findIndex((line) => line.trim() === '---')

  if (endIndex === -1) {
    return {
      frontmatter: {},
      content: raw
    }
  }

  const frontmatterLines = lines.slice(1, endIndex + 1)
  const content = lines.slice(endIndex + 2).join('\n')

  const frontmatter = frontmatterLines.reduce<Record<string, string>>((acc, line) => {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) {
      return acc
    }

    const separatorIndex = line.indexOf(':')

    if (separatorIndex === -1) {
      return acc
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()

    if (key) {
      acc[key] = unwrapQuoted(value)
    }

    return acc
  }, {})

  return { frontmatter, content }
}

const toNumberOrUndefined = (value: string | undefined): number | undefined => {
  if (!value) {
    return undefined
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : undefined
}

const toStringOrUndefined = (value: unknown): string | undefined => {
  if (typeof value !== 'string') {
    return undefined
  }

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

const parseArchiveDoc = (raw: string): ParsedArchiveDoc => {
  const { frontmatter, content } = parseFrontmatter(raw)

  const data: ArchiveDocMeta = {
    title: toStringOrUndefined(frontmatter.title),
    description: toStringOrUndefined(frontmatter.description),
    cover: toStringOrUndefined(frontmatter.cover),
    category: toStringOrUndefined(frontmatter.category),
    categoryOrder: toNumberOrUndefined(frontmatter.categoryOrder),
    order: toNumberOrUndefined(frontmatter.order)
  }

  return { data, content }
}

const compareItems = (a: PortfolioItem, b: PortfolioItem): number => {
  return (
    (a.categoryOrder ?? Number.POSITIVE_INFINITY) -
      (b.categoryOrder ?? Number.POSITIVE_INFINITY) ||
    (a.category ?? '').localeCompare(b.category ?? '') ||
    (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY) ||
    a.title.localeCompare(b.title)
  )
}

export const houdini: PortfolioItem[] = Object.entries(archiveDocs)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()?.replace('.md', '')

    if (!slug) {
      return null
    }

    const { data, content } = parseArchiveDoc(raw)
    const firstImage = content.match(/!\[[^\]]*\]\(([^)]+)\)/)?.[1]

    return {
      title: data.title || toTitle(slug),
      category: data.category,
      categoryOrder: data.categoryOrder,
      order: data.order,
      tags: data.category ? [data.category] : undefined,
      cover: data.cover || firstImage || fallbackCover,
      url: `/portfolio-archive/${slug}`,
      description: data.description
    } satisfies PortfolioItem
  })
  .filter((item): item is PortfolioItem => item !== null)
  .sort(compareItems)
