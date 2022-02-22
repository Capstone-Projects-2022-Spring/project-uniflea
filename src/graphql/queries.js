/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      image
      images
      category
      price
      userSub
      university
      savedProducts {
        items {
          id
          userSub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productSavedProductsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        images
        category
        price
        userSub
        university
        savedProducts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        image
        images
        category
        price
        userSub
        university
        savedProducts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSavedProduct = /* GraphQL */ `
  query GetSavedProduct($id: ID!) {
    getSavedProduct(id: $id) {
      id
      product {
        id
        title
        description
        image
        images
        category
        price
        userSub
        university
        savedProducts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productSavedProductsId
    }
  }
`;
export const listSavedProducts = /* GraphQL */ `
  query ListSavedProducts(
    $filter: ModelSavedProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product {
          id
          title
          description
          image
          images
          category
          price
          userSub
          university
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productSavedProductsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSavedProducts = /* GraphQL */ `
  query SyncSavedProducts(
    $filter: ModelSavedProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSavedProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        product {
          id
          title
          description
          image
          images
          category
          price
          userSub
          university
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productSavedProductsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      displayName
      university
      gradYear
      userSub
      image
      sumRatings
      numRatings
      reviews {
        items {
          id
          title
          message
          reviewerSub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userReviewsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        displayName
        university
        gradYear
        userSub
        image
        sumRatings
        numRatings
        reviews {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        displayName
        university
        gradYear
        userSub
        image
        sumRatings
        numRatings
        reviews {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      title
      message
      reviewerSub
      user {
        id
        displayName
        university
        gradYear
        userSub
        image
        sumRatings
        numRatings
        reviews {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userReviewsId
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        message
        reviewerSub
        user {
          id
          displayName
          university
          gradYear
          userSub
          image
          sumRatings
          numRatings
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReviewsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        message
        reviewerSub
        user {
          id
          displayName
          university
          gradYear
          userSub
          image
          sumRatings
          numRatings
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReviewsId
      }
      nextToken
      startedAt
    }
  }
`;
