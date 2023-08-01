/* eslint-disable prettier/prettier */
import axios from 'axios';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Box, Button } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/StarBorder';

import { Prices } from './config/price';
import { useAppContext } from './context/app';
import { API_BASE_URL, STRIPE_PUBLISHABLE_KEY } from './config';

const PricingList = styled('ul')({
    margin: 0,
    padding: 0,
    listStyle: 'none'
});

const tiers = [
    {
        name: 'PinkStart',
        description: [
            '100 token al mese',
            'Immagini 1024x1024 pixel',
            'Abbonamento 12 mesi'
       
        ],
        price: {
            amount: 5,
            priceId: import.meta.env.MODE === 'development' ? Prices.subscription.dev.pinkstart.id : Prices.subscription.live.pinkstart.id
        },
        items: {
            tokens: 100
        },
        buttonText: 'Purchase',
        buttonVariant: 'contained',
        color: 'secondary'
    },
    {
        name: 'PinkPro',
        description: [
            '250 token al mese',
            'Immagini 1024x1024 pixel',
            'Abbonamento 12 mesi'
           
        ],
        price: {
            amount: 10,
            priceId: import.meta.env.MODE === 'development' ? Prices.subscription.dev.pinkpro.id : Prices.subscription.live.pinkpro.id
        },
        items: {
            tokens: 250
        },
        buttonText: 'Purchase',
        buttonVariant: 'contained'
    },
    {
        name: 'PinkStar',
        description: [
            '600 token al mese',
            'Immagini 1024x1024 pixel',
            'Abbonamento 12 mesi'
        ],
        price: {
            amount: 20,
            priceId: import.meta.env.MODE === 'development' ? Prices.subscription.dev.pinkstar.id : Prices.subscription.live.pinkstar.id
        },
        items: {
            tokens: 600
        },
        buttonText: 'Purchase',
        buttonVariant: 'contained'
    }
];
export default function Pricing() {
    const { accessToken } = useAppContext();
    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.name}
                        xs={12}
                        sm={tier.name === 'Enterprise' ? 12 : 6}
                        md={4}>
                        <Card>
                            <CardHeader
                                title={tier.name}
                                subheader={tier.subheader}
                                titleTypographyProps={{ align: 'center' }}
                                action={tier.name === 'Pro' ? <StarIcon /> : null}
                                subheaderTypographyProps={{
                                    align: 'center'
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700]
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2
                                    }}>
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        ${tier.price.amount}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        /al mese
                                    </Typography>
                                </Box>
                                <PricingList>
                                    {tier.description.map((line) => (
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={line}>
                                            {line}
                                        </Typography>
                                    ))}
                                </PricingList>
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant}
                                    color="secondary"
                                    onClick={async () => {
                                        try {
                                            const response = await axios.post(
                                                `${API_BASE_URL}/order/create-checkout-session`,
                                                {
                                                    priceId: tier.price.priceId,
                                                    tokens: tier.items.tokens,
                                                    isSubscription: true
                                                },
                                                {
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        Authorization: `Bearer ${accessToken}`
                                                    }
                                                }
                                            );
                                            const { sessionId } = response.data;
                                            const stripe = await loadStripe(
                                                STRIPE_PUBLISHABLE_KEY
                                            );
                                            stripe.redirectToCheckout({ sessionId });
                                        } catch (error) {
                                            console.log(error);
                                        }
                                    }}>
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
