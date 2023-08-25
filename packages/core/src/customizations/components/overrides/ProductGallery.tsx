// This is an example of how it can be used on the starter.

import { SectionOverride } from 'src/typings/overrides'
import CustomProductCard from '../CustomProductCard'

const SECTION = 'ProductGallery' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalProductCard: { Component: CustomProductCard },
  },
}

export { override }
