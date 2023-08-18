import type { SearchState } from '@faststore/sdk'
import {
  formatSearchState,
  parseSearchState,
  SearchProvider,
} from '@faststore/sdk'
import { SROnly as UISROnly } from '@faststore/ui'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import type { ComponentType } from 'react'
import { useMemo } from 'react'

import Breadcrumb from 'src/components/sections/Breadcrumb'
import ProductGallery from 'src/components/sections/ProductGallery'
import { ITEMS_PER_PAGE } from 'src/constants'
import CUSTOM_COMPONENTS from 'src/customizations/components'
import { useApplySearchState } from 'src/sdk/search/state'
import { mark } from 'src/sdk/tests/mark'

import { Locator } from '@vtex/client-cms'
import { GetStaticProps } from 'next'
import GlobalSections, {
  getGlobalSectionsData,
  GlobalSectionsData,
} from 'src/components/cms/GlobalSections'
import RenderSections from 'src/components/cms/RenderSections'
import { getPage, SearchContentType } from 'src/server/cms'
import storeConfig from '../../faststore.config'
import { useProductGalleryQuery } from 'src/sdk/product/useProductGalleryQuery'
import {
  ProductsPerPage,
  usePageProductsQuery,
} from 'src/sdk/product/usePageProductsQuery'
import { ClientProductGalleryQueryQuery } from '@generated/graphql'
import PageProvider from 'src/sdk/overrides/PageProvider'

/**
 * Sections: Components imported from each store's custom components and '../components/sections' only.
 * Do not import or render components from any other folder in here.
 */
const COMPONENTS: Record<string, ComponentType<any>> = {
  Breadcrumb,
  ProductGallery,
  ...CUSTOM_COMPONENTS,
}

type Props = {
  page: SearchContentType
  globalSections: GlobalSectionsData
}

export interface SearchPageContextType {
  title: string
  searchTerm?: string
}

export interface SearchPageContext {
  data?: SearchPageContextType &
    ClientProductGalleryQueryQuery & { productsPerPage: ProductsPerPage[] }
}

type UseSearchParams = {
  sort: SearchState['sort']
}

const useSearchParams = ({ sort: defaultSort }: UseSearchParams) => {
  const { asPath } = useRouter()

  const hrefState = useMemo(() => {
    const url = new URL(asPath, 'http://localhost')

    const shouldUpdateDefaultSort = defaultSort && !url.searchParams.has('sort')
    if (shouldUpdateDefaultSort) {
      url.searchParams.set('sort', defaultSort)
    }

    const newState = parseSearchState(url)
    return formatSearchState(newState).href
  }, [asPath, defaultSort])

  return useMemo(() => parseSearchState(new URL(hrefState)), [hrefState])
}

function Page({ page: { sections, settings }, globalSections }: Props) {
  const searchParams = useSearchParams({
    sort: settings?.productGallery?.sortBySelection as SearchState['sort'],
  })
  const applySearchState = useApplySearchState()
  const title = 'Search Results'
  const { description, titleTemplate } = storeConfig.seo

  const { page, sort, term, selectedFacets } = searchParams
  const itemsPerPage = settings?.productGallery?.itemsPerPage ?? ITEMS_PER_PAGE

  const { data: pageProductGalleryData } = useProductGalleryQuery({
    term,
    sort,
    selectedFacets,
    itemsPerPage,
  })

  const { productsPerPage } = usePageProductsQuery({
    page,
    term,
    sort,
    selectedFacets,
    itemsPerPage,
  })

  if (!searchParams) {
    return null
  }

  const server = {
    title,
    searchTerm: searchParams.term ?? undefined,
  } as SearchPageContextType

  const context = {
    data: {
      ...server,
      ...pageProductGalleryData,
      productsPerPage,
    },
  } as SearchPageContext

  return (
    <GlobalSections {...globalSections}>
      <SearchProvider
        onChange={applySearchState}
        itemsPerPage={itemsPerPage}
        {...searchParams}
      >
        {/* SEO */}
        <NextSeo
          noindex
          title={title}
          description={description}
          titleTemplate={titleTemplate}
          openGraph={{
            type: 'website',
            title,
            description,
          }}
        />

        <UISROnly as="h1" text={title} />

        {/*
          WARNING: Do not import or render components from any
          other folder than '../components/sections' in here.

          This is necessary to keep the integration with the CMS
          easy and consistent, enabling the change and reorder
          of elements on this page.

          If needed, wrap your component in a <Section /> component
          (not the HTML tag) before rendering it here.
        */}
        <PageProvider context={context}>
          <RenderSections sections={sections} components={COMPONENTS} />
        </PageProvider>
      </SearchProvider>
    </GlobalSections>
  )
}

export const getStaticProps: GetStaticProps<
  Props,
  Record<string, string>,
  Locator
> = async ({ previewData }) => {
  const [page, globalSections] = await Promise.all([
    getPage<SearchContentType>({
      ...(previewData?.contentType === 'search' ? previewData : null),
      contentType: 'search',
    }),
    getGlobalSectionsData(previewData),
  ])

  return {
    props: {
      page,
      globalSections,
    },
  }
}

Page.displayName = 'Page'

export default mark(Page)
