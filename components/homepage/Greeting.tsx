import { useTranslation } from 'next-i18next'
import clsx from 'clsx'

export function Greeting() {
  let { t } = useTranslation('common')

  let className = clsx(
    'dark:bg-gradient-to-r dark:from-yellow-600 dark:to-red-600 bg-gradient-to-l from-emerald-500 to-lime-600',
    'bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'

   

  )

  return (
    <div className={className}>
      <i className="twa twa-waving-hand"></i> {t('greeting_message')}
    </div>
  )
}
