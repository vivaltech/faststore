import { useGalleryPage } from 'src/components/templates/ProductListingPage/ProductListing'
import { usePLP } from 'src/sdk/overrides/PageProvider'

export interface CallToActionProps {
  title: string
  link: {
    text: string
    url: string
  }
}

export default function CallToAction(props: CallToActionProps) {
  // const context = usePLP()
  const context2 = useGalleryPage(0)
  console.log('🚀 ~ context2:', context2)
  // console.log(
  //   '🚀 ~ CallToAction context productsPerPage:',
  //   context?.data?.productsPerPage
  // )
  return (
    <section>
      <h2>{`${props.title}`}</h2>
    </section>
  )
}
