/** @jsx jsx */
import { FC, useState } from 'react'
import { useIntl } from '@vtex/gatsby-plugin-i18n'
import {
  Box,
  Button,
  jsx,
  PaginationDots,
  useInterval,
  LocalizedLink,
} from '@vtex/store-ui'

interface Item {
  mobileSrc: string
  src: string
  altText: string
  width: number
  height: number
  href?: string
}

interface Props {
  items: Item[]
  showArrows?: boolean
  showDots?: boolean
  autoplay?: boolean
  autoplayTimeout?: number
}

const Carousel: FC<Props> = ({
  items,
  showArrows = true,
  showDots = true,
  autoplayTimeout = 1000,
  autoplay = false,
}) => {
  const { formatMessage } = useIntl()
  const [index, setIndex] = useState(0)
  const lastIndex = items.length - 1

  // TODO: When implementing the Slider, use a timeout instead to improve UX
  useInterval(() => {
    if (!autoplay) {
      return
    }

    setIndex((currentIndex) =>
      currentIndex === lastIndex ? 0 : currentIndex + 1
    )
  }, autoplayTimeout)

  const item = items[index]

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        key={item.altText}
        sx={{
          minHeight: '226 px',
          height: '100%',
        }}
      >
        {showArrows && (
          <Button
            onClick={() => setIndex(index === 0 ? lastIndex : index - 1)}
            sx={{ position: 'absolute', top: '50%', left: 0 }}
          >
            {formatMessage({ id: 'carousel.previous' })}
          </Button>
        )}
        {showArrows && (
          <Button
            onClick={() => setIndex(index === lastIndex ? 0 : index + 1)}
            sx={{ position: 'absolute', top: '50%', right: 0 }}
          >
            {formatMessage({ id: 'carousel.next' })}
          </Button>
        )}
        <LocalizedLink to={item.href ?? '/'}>
          <picture>
            <source media="(max-width: 500px)" srcSet={item.mobileSrc} />
            <source media="(min-width: 501px)" srcSet={item.src} />
            <img
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.altText}
              loading="eager"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </picture>
        </LocalizedLink>
      </Box>
      {showDots && (
        <PaginationDots
          variant="carousel"
          totalItems={items.length}
          selectedIndex={index}
          onSelect={setIndex}
        />
      )}
    </Box>
  )
}

export default Carousel
