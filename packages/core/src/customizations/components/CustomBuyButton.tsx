import { Button as UIButton } from '@faststore/ui'
import { usePDP } from 'src/sdk/overrides/PageProvider'

export function CustomBuyButton(props) {
  console.log('🚀 ~ props:', props)
  const context = usePDP()
  console.log('🚀 ~ CustomBuyButton context:', context)

  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert('Hello User!')
      }}
    >
      {context?.data?.product.customData}
    </UIButton>
  )
}
