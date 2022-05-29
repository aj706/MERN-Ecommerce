import StripeCheckout from "react-stripe-checkout";

const STRIPE_PUBLISHABLE =
  "pk_test_51Kp78WSFIxrpBMdxxp3KlRMY8g8jQY2sX2zd1I2oCDPeM71Sn1fIPRHcxWvrN1i9Hfn34Vh3pTGG9wi9bXuySvVT005WKz3TZM";

const onToken = (user, checkout) => (token) => checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => (
  <StripeCheckout
    amount={amount * 100}
    token={onToken(user, checkout)}
    currency="INR"
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
