
// Customer
const initialStateCustomer = {
  fullName: "",
  ID: "",
  createdAt: "",
};

// Customer reducer
export default function customerReducer(state = initialStateCustomer, action: any) {
  switch (action.type) {
    case "customer/createCustomer":
    return {
      ...state,
      // payload: {
        fullName: action.payload.fullName,
        ID: action.payload.ID,
        createdAt: action.payload.createdAt,
      // },
    };
   
    case "customer/updateName":
      return { ...state, payload: action.payload.fullName };

    default:
      return state;
  }
}

export function createCustomer({fullName, ID}: {fullName: string, ID: string}) {
 return { type: 'customer/createCustomer', payload: { fullName, ID, createdAt: new Date().toISOString()}};
}

export function updateName(fullName: string) {
 return { type: "customer/updateName", payload: fullName };
}