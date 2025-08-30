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
				...state, balance: state.balance -= state.loan, loan: 0, loanPurpose: "",
			}

		default: 
			return state;
  }
}

const store = createStore(reducer);


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

store.dispatch(deposit(700));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(3000, "Car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

