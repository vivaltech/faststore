
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
}

// Operation related types
export type AddToCartMutationMutationVariables = Exact<{
  orderFormId: Maybe<Scalars['ID']>;
  items: Maybe<Array<Maybe<Vtex_ItemInput>>>;
  marketingData: Maybe<Vtex_MarketingDataInput>;
}>;


export type AddToCartMutationMutation = { addToCart: { id: string, canEditData: boolean, loggedIn: boolean, userProfileId: Maybe<string>, userType: Maybe<Vtex_UserType>, value: number, allowManualPrice: Maybe<boolean>, items: Array<{ parentAssemblyBinding: Maybe<string>, sellingPriceWithAssemblies: Maybe<number>, availability: Maybe<string>, detailUrl: Maybe<string>, id: string, listPrice: Maybe<number>, manualPrice: Maybe<number>, measurementUnit: Maybe<string>, name: Maybe<string>, price: Maybe<number>, productCategories: Maybe<any>, productCategoryIds: Maybe<string>, productRefId: Maybe<string>, productId: Maybe<string>, quantity: number, seller: Maybe<string>, sellingPrice: Maybe<number>, skuName: Maybe<string>, unitMultiplier: Maybe<number>, uniqueId: string, refId: Maybe<string>, additionalInfo: Maybe<{ brandName: Maybe<string> }>, attachments: Array<{ name: Maybe<string>, content: Maybe<any> }>, attachmentOfferings: Array<{ name: Maybe<string>, required: Maybe<boolean>, schema: Maybe<any> }>, bundleItems: Array<{ availability: Maybe<string>, detailUrl: Maybe<string>, id: string, listPrice: Maybe<number>, measurementUnit: Maybe<string>, name: Maybe<string>, price: Maybe<number>, productCategories: Maybe<any>, productCategoryIds: Maybe<string>, productRefId: Maybe<string>, productId: Maybe<string>, quantity: number, seller: Maybe<string>, sellingPrice: Maybe<number>, skuName: Maybe<string>, unitMultiplier: Maybe<number>, uniqueId: string, refId: Maybe<string>, additionalInfo: Maybe<{ brandName: Maybe<string> }>, attachments: Array<{ name: Maybe<string>, content: Maybe<any> }>, attachmentOfferings: Array<{ name: Maybe<string>, required: Maybe<boolean>, schema: Maybe<any> }>, imageUrls: Maybe<{ at1x: string, at2x: string, at3x: string }>, offerings: Array<{ id: string, name: string, price: number, type: string, attachmentOfferings: Array<{ name: Maybe<string>, required: Maybe<boolean>, schema: Maybe<any> }> }>, skuSpecifications: Array<{ fieldName: Maybe<string>, fieldValues: Array<Maybe<string>> }> }>, options: Maybe<Array<Maybe<{ assemblyId: string, id: Maybe<string>, quantity: Maybe<number>, seller: Maybe<string>, inputValues: Maybe<any>, options: Maybe<Array<{ assemblyId: string, id: Maybe<string>, quantity: Maybe<number>, seller: Maybe<string>, inputValues: Maybe<any>, options: Maybe<Array<{ assemblyId: string, id: Maybe<string>, quantity: Maybe<number>, seller: Maybe<string>, inputValues: Maybe<any> }>> }>> }>>>, imageUrls: Maybe<{ at1x: string, at2x: string, at3x: string }>, offerings: Array<{ id: string, name: string, price: number, type: string, attachmentOfferings: Array<{ name: Maybe<string>, required: Maybe<boolean>, schema: Maybe<any> }> }>, skuSpecifications: Array<{ fieldName: Maybe<string>, fieldValues: Array<Maybe<string>> }> }>, marketingData: { coupon: Maybe<string>, utmCampaign: Maybe<string>, utmMedium: Maybe<string>, utmSource: Maybe<string>, utmiCampaign: Maybe<string>, utmiPart: Maybe<string>, utmiPage: Maybe<string> }, totalizers: Array<Maybe<{ id: string, name: Maybe<string>, value: number }>>, shipping: { countries: Maybe<Array<Maybe<string>>>, isValid: boolean, availableAddresses: Maybe<Array<Maybe<{ addressId: Maybe<string>, addressType: Maybe<Vtex_AddressType>, city: Maybe<string>, complement: Maybe<string>, country: Maybe<string>, neighborhood: Maybe<string>, number: Maybe<string>, postalCode: Maybe<string>, receiverName: Maybe<string>, reference: Maybe<string>, state: Maybe<string>, street: Maybe<string>, isDisposable: Maybe<boolean> }>>>, selectedAddress: Maybe<{ addressId: Maybe<string>, addressType: Maybe<Vtex_AddressType>, city: Maybe<string>, complement: Maybe<string>, country: Maybe<string>, neighborhood: Maybe<string>, number: Maybe<string>, postalCode: Maybe<string>, receiverName: Maybe<string>, reference: Maybe<string>, state: Maybe<string>, street: Maybe<string>, isDisposable: Maybe<boolean> }>, deliveryOptions: Array<{ id: string, price: number, estimate: string, isSelected: boolean }> }, paymentData: { isValid: boolean, paymentSystems: Array<{ id: string, name: string, groupName: string, stringId: string, requiresDocument: boolean, isCustom: boolean, description: Maybe<string>, requiresAuthentication: Maybe<boolean>, dueDate: Maybe<string>, validator: Maybe<{ regex: Maybe<string>, mask: Maybe<string>, cardCodeRegex: Maybe<string>, cardCodeMask: Maybe<string>, weights: Maybe<Array<Maybe<number>>>, useCvv: Maybe<boolean>, useExpirationDate: Maybe<boolean>, useCardHolderName: Maybe<boolean>, useBillingAddress: Maybe<boolean> }> }>, payments: Array<{ paymentSystem: Maybe<string>, bin: Maybe<string>, accountId: Maybe<string>, tokenId: Maybe<string>, installments: Maybe<number>, referenceValue: Maybe<number>, value: Maybe<number> }>, installmentOptions: Array<{ paymentSystem: string, installments: Array<{ count: number, hasInterestRate: Maybe<boolean>, interestRate: Maybe<number>, value: Maybe<number>, total: number }> }>, availableAccounts: Array<{ accountId: string, paymentSystem: string, paymentSystemName: string, cardNumber: string, bin: string }> }, clientProfileData: Maybe<{ email: Maybe<string>, firstName: Maybe<string>, lastName: Maybe<string>, document: Maybe<string>, documentType: Maybe<string>, phone: Maybe<string>, isValid: boolean }>, clientPreferencesData: Maybe<{ locale: Maybe<string>, optInNewsletter: Maybe<boolean> }>, messages: { couponMessages: Array<Maybe<{ code: Maybe<string> }>>, generalMessages: Array<Maybe<{ code: Maybe<string>, text: Maybe<string>, status: Maybe<string> }>> } } };


// Query Related Code

export const AddToCartMutation = {
  query: undefined,
  sha256Hash:
    '050aa4dd330c96ade95f4018c3332aa38b882734968674fe4629f4fe8de0ddd4',
  operationName: 'AddToCartMutation',
}

