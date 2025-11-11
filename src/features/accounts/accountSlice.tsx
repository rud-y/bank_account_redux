
// Account
const initialState = {
 balance: 0,
	loan: 0,
	loanPurpose: '',
}

export default function accountReducer(state = initialState, action: any) {
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
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: (state.balance += action.payload.loanAmount),
      };

    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

    default:
      return state;
  }
}

export function deposit(amount: number) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount: number) {
  return { type: "account/withdrawal", payload: amount };
}

export function requestLoan(loanAmount: number, loanPurpose: string) {
  return { type: "account/requestLoan", payload: { loanAmount, loanPurpose } };
}

export function payLoan() {
  return { type: "account/payLoan" };
}

