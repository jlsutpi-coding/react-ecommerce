import { useNavigate } from "react-router-dom";
import { fromatMoney } from "../../utils/formatMoney";
import axios from "axios";

export const PaymentSummary = ({ paymentSummary, loadCart }) => {
  const navigate = useNavigate();

  const onPlaceOrder = async () => {
    await axios.post("/api/orders");
    await loadCart();
    navigate(`/orders`);
  };
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
          <div className="payment-summary-row ">
            <div>
              Estimated tax {`(`}10%{`)`}:
            </div>
            <div className="payment-summary-money">
              {fromatMoney(paymentSummary.taxCents)}
            </div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order toal: </div>
            <div>{fromatMoney(paymentSummary.totalCostCents)}</div>
          </div>

          <button
            onClick={onPlaceOrder}
            className="place-order-button button-primary"
          >
            Place your order
          </button>
        </div>
      )}
    </>
  );
};
