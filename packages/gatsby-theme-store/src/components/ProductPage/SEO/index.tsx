import React, { useState } from 'react'
import type { FC } from 'react'

import { useIdleEffect } from '../../../sdk/useIdleEffect'
import { isBot, isDevelopment } from '../../../utils/env'
import SiteMetadata from '../../SEO/SiteMetadata'
import StructuredData from './StructuredData'
import type { ProductPageProps } from '../../../templates/product'

const withSyncMetadata = isBot || isDevelopment

const SEO: FC<ProductPageProps> = (props) => {
  const [metadata, setMetadata] = useState(withSyncMetadata)

  useIdleEffect(() => setMetadata(true), [])

  if (!metadata) {
    return null
  }

  return (
    <>
      <SiteMetadata {...props} />
      <StructuredData {...props} />
    </>
  )
}

export default SEO
