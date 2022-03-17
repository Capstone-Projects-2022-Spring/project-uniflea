import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SavedProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly images: string[];
  readonly category?: string[];
  readonly price: number;
  readonly userSub: string;
  readonly university: string;
  readonly savedProducts?: (SavedProduct | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class SavedProduct {
  readonly id: string;
  readonly product?: Product;
  readonly userSub: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SavedProduct, SavedProductMetaData>);
  static copyOf(source: SavedProduct, mutator: (draft: MutableModel<SavedProduct, SavedProductMetaData>) => MutableModel<SavedProduct, SavedProductMetaData> | void): SavedProduct;
}

export declare class User {
  readonly id: string;
  readonly displayName: string;
  readonly university: string;
  readonly gradYear: number;
  readonly userSub: string;
  readonly image?: string;
  readonly sumRatings?: number;
  readonly numRatings?: number;
  readonly reviews?: (Review | null)[];
  readonly phone: string;
  readonly name: string;
  readonly dob: string;
  readonly email: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Review {
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly reviewerSub: string;
  readonly user?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Review, ReviewMetaData>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review, ReviewMetaData>) => MutableModel<Review, ReviewMetaData> | void): Review;
}