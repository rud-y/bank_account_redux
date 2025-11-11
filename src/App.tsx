import { useSelector } from "react-redux";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";


function App() {
 const fullName = useSelector((store: any) => store.customer.fullName);
 
  return (
    <div className="App">
      
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
    </div>
  );
}

export default App;

 