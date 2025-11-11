function formatCurrency(value: any) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(100)}</div>;
}

export default BalanceDisplay;
