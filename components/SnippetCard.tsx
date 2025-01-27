import type { SnippetFrontMatter } from '~/types/mdx'
import { BrandIcon } from './BrandIcon'
import { Link } from './Link'

export function SnippetCard({ snippet }: { snippet: SnippetFrontMatter }) {
  let { type, heading, summary, title, slug } = snippet

  return (
    <Link href={`/snippets/${slug}`} title={title}>
      <div
        data-umami-event="view-snippet"
        className="mb-4 flex cursor-pointer rounded-lg border border-transparent shadow-intense hover:shadow-nextjs dark:border-gray-600 dark:hover:border-gray-400 lg:mb-0"
      >
        <div className="p-3 lg:p-4">
          <BrandIcon type={type} />
        </div>
        <div className="overflow-hidden p-3 md:p-4 lg:p-4 space-y-2">
          <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold leading-8 tracking-tight lg:text-2xl">
            {heading}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 lg:text-base">{summary}</p>
        </div>
      </div>
    </Link>
  )
}
