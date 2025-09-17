import { useSelector } from "react-redux";

function Customer() {
 const customer = useSelector((store: any)=> store.customer.fullName);
 console.log('CUSTOMER NAME ', customer)

  return <h2>Welcome, {customer}</h2>;
}

export default Customer;
