import AccountOperations from "./AccountOperations";
import BalanceDisplay from "./BalanceDisplay";
import CreateCustomer from "./CreateCustomer";
import Customer from "./Customer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank Account</h1>
        <>
          <span>Balance: </span>
          <BalanceDisplay />
        </>
        <CreateCustomer />
        <Customer />
        <AccountOperations />
      </header>
    </div>
  );
}

export default App;
