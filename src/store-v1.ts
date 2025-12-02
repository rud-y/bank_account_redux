import { combineReducers, createStore } from 'redux'

// Account
const initialState = {
 balance: 0,
	loan: 0,
	loanPurpose: '',
}

const initialStateCustomer = {
 fullName: '',
 ID: '',
 createdAt: '',
}

function accountReducer(state = initialState, action: any) {
	switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "account/withdrawal":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

		case "account/requestLoan":
			if(state.loan > 0) return state;
			return {
				...state, loan: action.payload, balance: state.balance += action.payload.loanAmount,
			};

		case "account/payLoan":
			return {
				...state, balance: state.balance - state.loan, loan: 0, loanPurpose: "",
			}

		default: 
			return state;
  }
}


function deposit(amount: Number) {
 return { type: "account/deposit", payload: amount}
}

function withdraw(amount: Number) {
 return { type: "account/withdrawal", payload: amount}
}

function requestLoan(loanAmount: Number, loanPurpose: String) {
 return { type: "account/requestLoan", payload: { loanAmount, loanPurpose }}
}

function payLoan() {
 return{ type: "account/payLoan" }
}


// Customer reducer
function customerReducer(state = initialStateCustomer, action: any) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        payload: {
          fullName: action.payload.fullName,
          ID: action.payload.ID,
          createdAt: action.payload.createdAt,
        },
      };

    case "customer/updateName":
      return { ...state, payload: action.payload.fullName };

    default:
      return state;
  }
}

function createCustomer({fullName, ID}: {fullName: String, ID: String}) {
 return { type: 'customer/createCustomer', payload: { fullName, ID, createdAt: new Date().toISOString()}};
}

function updateName(fullName: String) {
 return { type: "customer/updateName", payload: fullName };
}



// store.dispatch(deposit(700));
// store.dispatch(withdraw(200));
// console.log(store.getState());

// store.dispatch(requestLoan(3000, "Car"));
// console.log(store.getState());

// store.dispatch(payLoan());
// console.log(store.getState());

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// store.dispatch(createCustomer({ fullName: 'Rud Zee', ID:'1234' }));
// console.log(store.getState())

// store.dispatch(deposit(700));
// console.log(store.getState());


