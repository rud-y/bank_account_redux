import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";
import store from '../../store';
import ModalWarning from "./ModalWarning";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [warning, setWarning] = useState("");

  const dispatch = useDispatch();

  const {loan: currentLoan, loanPurpose: currentLoanPurpose, balance } = useSelector((store: any) => store.account);

  const account = useSelector((state: any) => state.account);

  console.log('STATE OF ACCOUNT ...', account.balance)


  function handleDeposit() {
   if (!depositAmount) return;

   dispatch(deposit(depositAmount));
   setDepositAmount(0);
   const cs = store.getState();
   console.log('STATE CURRENT ', cs)
  }

  function handleWithdrawal() {
   if (!withdrawalAmount) return;

   if (withdrawalAmount > balance) {
    setWarning("You cannot withdraw more than the remaining balance amount.");
    return
   }

   if (withdrawalAmount <= balance) {
     dispatch(withdraw(withdrawalAmount));
     setWithdrawalAmount(0);
   }
  }

  function handleRequestLoan() {
   if (!loanAmount || !loanPurpose) return;

   dispatch(requestLoan(loanAmount, loanPurpose));
   setLoanAmount(0);
   setLoanPurpose("");
  }
 

  function handlePayLoan() {
   dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(Number(e.target.value))}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>Pay back $X</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
