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

  const getFrontmatterNumber = (key: string): number | undefined => {
    const value = getFrontmatterValue(key)
    if (!value) {
      return undefined
    }

    const parsed = Number(value)
    return Number.isNaN(parsed) ? undefined : parsed
  }

  const imageMatch = raw.match(/!\[[^\]]*\]\(([^)]+)\)/)

  return {
    title: getFrontmatterValue('title'),
    description: getFrontmatterValue('description'),
    cover: imageMatch?.[1],
    category: getFrontmatterValue('category'),
    categoryOrder: getFrontmatterNumber('categoryOrder'),
    order: getFrontmatterNumber('order')
  }
}

export const houdini: PortfolioItem[] = Object.entries(archiveDocs)
  .map(([path, raw]) => {
    const slugMatch = path.match(/portfolio-archive\/(.+)\.md$/)
    const slug = slugMatch?.[1]

    if (!slug) {
      return null
    }

    const { title, description, cover, category, categoryOrder, order } = parseArchiveDoc(raw)

    return {
      title: title || toTitle(slug),
      category,
      categoryOrder,
      order,
      tags: category ? [category] : undefined,
      cover: cover || fallbackCover,
      url: `/portfolio-archive/${slug}`,
      description
    } satisfies PortfolioItem
  })
  .filter((item): item is PortfolioItem => item !== null)
  .sort((a, b) => {
    const categoryOrderA = a.categoryOrder ?? Number.MAX_SAFE_INTEGER
    const categoryOrderB = b.categoryOrder ?? Number.MAX_SAFE_INTEGER

    if (categoryOrderA !== categoryOrderB) {
      return categoryOrderA - categoryOrderB
    }

    const categoryA = a.category ?? ''
    const categoryB = b.category ?? ''
    const categoryCompare = categoryA.localeCompare(categoryB)

    if (categoryCompare !== 0) {
      return categoryCompare
    }

    const orderA = a.order ?? Number.MAX_SAFE_INTEGER
    const orderB = b.order ?? Number.MAX_SAFE_INTEGER

    if (orderA !== orderB) {
      return orderA - orderB
    }

    return a.title.localeCompare(b.title)
  })
