const defaultState = {
  customers: [],
}

export const customerReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { ...state, customers: [...state.customers, action.payloud] }
    case 'REMOVE_CUSTOMER':
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payloud
        ),
      }

    default:
      return state
  }
}
