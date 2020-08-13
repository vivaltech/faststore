/** @jsx jsx */
import { Flex, Heading, jsx, Box } from '@vtex/store-ui'
import { FC } from 'react'

import { SearchPageQueryQuery } from '../../templates/__generated__/SearchPageQuery.graphql'
import Container from '../Container'
import SearchFilters from './Filters'
import PageList from './PageList'
import SortSelect from './SortSelect'

interface Props {
  search: SearchPageQueryQuery
}

const SearchTemplate: FC<Props> = ({ search }) => {
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column' }} my={4}>
        <Heading sx={{ fontSize: 6 }} as="h2">
          {search.vtex.productSearch!.titleTag}
        </Heading>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box variant="filters">
            <aside>
              <SearchFilters
                {...(search.vtex.facets as any)}
                variant="filters"
              />
            </aside>
          </Box>
          <div
            sx={{
              flexGrow: 99999,
              flexBasis: 0,
              minWidth: 300,
              ml: '1rem',
            }}
          >
            <Flex
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <span>{search.vtex.productSearch!.recordsFiltered}</span>{' '}
                PRODUCTS
              </Box>
              <SortSelect variant="sortSelect" />
            </Flex>
            <PageList initialData={search} />
          </div>
        </div>
      </Flex>
    </Container>
  )
}

export default SearchTemplate
