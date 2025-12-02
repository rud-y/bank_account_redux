import { AppDispatch } from "../../store";

// Account
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialState, action: any) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload, isLoading: false,
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
        loan: action.payload.loanAmount,
        loanPurpose: action.payload.loanPurpose,
        balance: (state.balance + action.payload.loanAmount),
      };

    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

      case "account/convertingCurrency":
       return {
        ...state,
        isLoading: true,
       }

    default:
      return state;
  }
}

export function deposit(amount: number, currency: string) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch: AppDispatch, getState: any) {
   dispatch({ type: "account/convertingCurrency"})
    // API call
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();
    const usdConverted = data.rates.USD
    
    dispatch({ type: "account/deposit", payload: usdConverted})
  };
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
