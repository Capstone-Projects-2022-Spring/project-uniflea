/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createSavedProduct = /* GraphQL */ `
  mutation CreateSavedProduct(
    $input: CreateSavedProductInput!
    $condition: ModelSavedProductConditionInput
  ) {
    createSavedProduct(input: $input, condition: $condition) {
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
export const updateSavedProduct = /* GraphQL */ `
  mutation UpdateSavedProduct(
    $input: UpdateSavedProductInput!
    $condition: ModelSavedProductConditionInput
  ) {
    updateSavedProduct(input: $input, condition: $condition) {
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
export const deleteSavedProduct = /* GraphQL */ `
  mutation DeleteSavedProduct(
    $input: DeleteSavedProductInput!
    $condition: ModelSavedProductConditionInput
  ) {
    deleteSavedProduct(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
