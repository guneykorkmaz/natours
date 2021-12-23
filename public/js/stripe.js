import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51K9S3xFUJgIQykSQROoiugazZQWgFvBygRHON5lhYDPoDCuUbXaBvZHPrcygO7ddlxJSWeklTKnMuBhKyuEAg0u500QqrjMRlB'
  );
  
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
