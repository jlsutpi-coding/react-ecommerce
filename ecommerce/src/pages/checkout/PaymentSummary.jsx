import { fromatMoney } from "../../utils/formatMoney";

export const PaymentSummary = ({ paymentSummary }) => {
  return (
    <>
      {paymentSummary && (
        <div className="payment-summary">
          <div className="payment-summary-title"> Payment Summary</div>
          <div className="payment-summary-row">
            <div>
              Item {"("}
              {paymentSummary.totalItems}
              {")"}:
            </div>
            <div>{fromatMoney(paymentSummary.productCostCents)}</div>
          </div>
          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div>{fromatMoney(paymentSummary.shippingCostCents)}</div>
          </div>
          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">
              {fromatMoney(paymentSummary.totalCostBeforeTaxCents)}
            </div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order toal: </div>
            <div>{fromatMoney(paymentSummary.totalCostCents)}</div>
          </div>

          <button className="place-order-button button-primary">
            Place your order
          </button>
        </div>
      )}
    </>
  );
};
