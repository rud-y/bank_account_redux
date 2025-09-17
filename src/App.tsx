import { useSelector } from "react-redux";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";


function App() {
 const fullName = useSelector((store: any) => store.dispatch.fullName)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank Account</h1>
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <div>
            <>
              <span>Balance: </span>
              <BalanceDisplay />
            </>
            <Customer />
            <AccountOperations />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

 