import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button, Typography, Card, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const stripePromise = loadStripe('pk_test_51QRwnZEnS6uFaxwj6Du6K02ntiJilWAk6W1Tdrf4cXl7O3UiRSrBR5SjAg3vKVFAtKYuYo2FI0UksYNUDrnL8kx2009oxmbaG7'); // Replace with your Stripe test API key

const PaymentCard = styled(Card)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const PaymentForm = ({postOrder}) => (
  <Elements stripe={stripePromise}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        padding: 2,
      }}
    >
      <PaymentCard>
        <Typography variant="h6" gutterBottom>
          Secure Payment
        </Typography>
        <StripeCheckoutForm postOrder={postOrder}/>
      </PaymentCard>
    </Box>
  </Elements>
);

const StripeCheckoutForm = ({postOrder}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    postOrder();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setLoading(false);

    if (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } else {
      console.log('Payment method created:', paymentMethod);
      setPaymentSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {paymentSuccess ? (
        <Typography variant="h6" color="success.main" sx={{ mb: 2, textAlign: 'center' }}>
          Payment Successful! Thank you for your purchase.
        </Typography>
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={loading || paymentSuccess || !stripe}
            sx={{
              py: 1.5,
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Pay Now'}
          </Button>
        </>
      )}
    </form>
  );
};

export default PaymentForm;
