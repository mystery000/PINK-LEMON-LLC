import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { API_URL } from '../config';
import { toast } from 'react-hot-toast';

const StripeButton = ({ price }) => {
    const publishableKey =
        'pk_test_51NQSChCNXWohRZKPt0bVARBkywBZRwtvG8HJhILOA7J8hvZx9hIDrCygXmVjEZsu0LFRvFRdsGBnSc7Qt4x6V1l100XlOEoyIE';

    const stripePrice = price * 100; // cent
    const onToken = (token) => {
        axios
            .post(`${API_URL}/stripe/package`, { amount: stripePrice, token })
            .then((response) => {
                toast.success('payment success');
            })
            .catch((error) => {
                toast.error('payment failed');
            });
    };
    return (
        <StripeCheckout
            amount={stripePrice}
            label="Pay Now"
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            currency="USD"
        />
    );
};

export default StripeButton;
