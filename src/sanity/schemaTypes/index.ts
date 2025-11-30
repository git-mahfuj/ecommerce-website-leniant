import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryTypes'
import { productType } from './productTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType , productType],
}
