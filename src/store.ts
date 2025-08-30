import { createStore } from 'redux'

const initialState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
}

function reducer(state = initialState, action: any) {
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
				...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan,
			}

		default: 
			return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 900})
store.dispatch({ type: "account/withdrawal", payload: 600})

console.log('STATE -- ', store.getState())

store.dispatch({ type: "account/requestLoan", payload: {
 loanAmount: 1000, loanPurpose: "Buy a washing machine"
}})
console.log(store.getState())


