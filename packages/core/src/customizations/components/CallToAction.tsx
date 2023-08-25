import { usePLP } from 'src/typings/pageProvider'

export interface CallToActionProps {
  title: string
  link: {
    text: string
    url: string
  }
}

export default function CallToAction(props: CallToActionProps) {
  const data = usePLP()

  console.log(data?.data?.productsPerPage)
  return <></>
}
