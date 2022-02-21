// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, SavedProduct, User, Review } = initSchema(schema);

export {
  Product,
  SavedProduct,
  User,
  Review
};