import { Twemoji } from '~/components/Twemoji'
import { siteMetadata } from '~/data/siteMetadata'

export function Heading() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">{siteMetadata.fullName}</span> - a dedicated{' '}
      <span className="font-medium">Software Engineer</span> in{' '}
      <span className="font-medium hidden">Ha Noi, VN</span>
      <span className="align-middle flag-vn">
        <Twemoji emoji="flag-vietnam" />
      </span>
    </h1>
  )
}
