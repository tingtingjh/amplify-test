/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer($id: Int!) {
    deleteCustomer(id: $id) {
      id
      name
      phone
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
    createCustomer(createCustomerInput: $createCustomerInput) {
      id
      name
      phone
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!) {
    updateCustomer(updateCustomerInput: $updateCustomerInput) {
      id
      name
      phone
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem($id: Int!) {
    deleteItem(id: $id) {
      id
      customerId
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem($createItemInput: CreateItemInput!) {
    createItem(createItemInput: $createItemInput) {
      id
      customerId
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem($updateItemInput: UpdateItemInput!) {
    updateItem(updateItemInput: $updateItemInput) {
      id
      customerId
    }
  }
`;
