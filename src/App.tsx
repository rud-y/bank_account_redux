import AccountOperations from "./AccountOperations";
import BalanceDisplay from "./BalanceDisplay";
import CreateCustsomer from "./CreateCustomer";
import Customer from "./Customer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Account</h1>
       <AccountOperations />
       <CreateCustsomer />
       <Customer />
       <BalanceDisplay />
      </header>
    </div>
  );
}

export default App;
