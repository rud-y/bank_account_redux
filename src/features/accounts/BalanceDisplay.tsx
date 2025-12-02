import { connect, useSelector } from "react-redux";

function formatCurrency(value: any) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store: any) => store.account.balance)
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state: any) {
 return {
  balance: state.account.balance
 }
}

export default connect(mapStateToProps)(BalanceDisplay);
