
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
export type HomePageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQueryQuery = { vtex: { productSearch: Maybe<{ products: Maybe<Array<Maybe<{ productId: Maybe<string>, productName: Maybe<string>, description: Maybe<string>, linkText: Maybe<string>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commertialOffer: Maybe<{ AvailableQuantity: Maybe<number>, Price: Maybe<number>, ListPrice: Maybe<number> }> }>>> }>>> }>>> }> } };


// Query Related Code

export const HomePageQuery = {
  query: "query HomePageQuery {\n  vtex {\n    productSearch(from: 0, to: 10) {\n      products {\n        productId\n        productName\n        description\n        linkText\n        items {\n          itemId\n          images {\n            imageUrl\n            imageText\n          }\n          sellers {\n            sellerId\n            commertialOffer {\n              AvailableQuantity\n              Price\n              ListPrice\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "554dcbc96ed46cf15ed3acca694609ead3a32c85412e10de78dbe82003e841ee",
  operationName: "HomePageQuery",
}

