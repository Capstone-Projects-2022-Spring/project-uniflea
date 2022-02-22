/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateSavedProduct = /* GraphQL */ `
  subscription OnCreateSavedProduct {
    onCreateSavedProduct {
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
export const onUpdateSavedProduct = /* GraphQL */ `
  subscription OnUpdateSavedProduct {
    onUpdateSavedProduct {
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
export const onDeleteSavedProduct = /* GraphQL */ `
  subscription OnDeleteSavedProduct {
    onDeleteSavedProduct {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
