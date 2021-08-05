/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: Int!) {
    getCustomer(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers {
    listCustomers {
      id
      name
      phone
      email
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: Int!) {
    getItem(id: $id) {
      id
      customerId
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems {
    listItems {
      id
      customerId
    }
  }
`;
