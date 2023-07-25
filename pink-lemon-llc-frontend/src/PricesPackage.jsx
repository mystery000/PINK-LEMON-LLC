import { useReadLocalStorage } from 'usehooks-ts';

import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Box, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';
import { API_BASE_URL, STRIPE_PUBLISHABLE_KEY } from './config';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-hot-toast';
import { useAppContext } from './context/app';

const PricingList = styled('ul')({
    margin: 0,
    padding: 0,
    listStyle: 'none'
});

const tiers = [
    {
        name: 'PinkShot',
        description: [
            '80 token validi un anno',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Nessun abbonamento'
        ],
        price: {
            amount: 5,
            priceId: 'price_1NXlmYESB7Q1Fa6geNSrosCh'
        },
        items: {
            tokens: 80
        },
        buttonText: 'Purchase',
        buttonVariant: 'contained',
        color: 'secondary'
    },
    {
        name: 'PinkWeek',
        description: [
            '200 token validi un anno',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Nessun abbonamento'
        ],
        price: {
            amount: 10,
            priceId: 'price_1NXlnhESB7Q1Fa6go2TDHxoO'
        },
        items: {
            tokens: 200
        },
        buttonText: 'Purchase',
        buttonVariant: 'contained'
    },
    {
        name: 'PinkLove',
        description: [
            '500 token validi un anno',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Nessun abbonamento'
        ],
        price: {
            amount: 20,
            priceId: 'price_1NXlogESB7Q1Fa6go9VW6ROy'
        },
        items: {
            tokens: 500
        },
        buttonText: 'Purchase',
        buttonVariant: 'contained'
    }
];

export default function PricesPackage() {
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
                                action={tier.title === 'Pro' ? <StarIcon /> : null}
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
                                    <Typography variant="h6" color="text.secondary"></Typography>
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
                                        if (accessToken.length < 1) {
                                            toast.error('You need to login');
                                            return;
                                        }
                                        try {
                                            const response = await axios.post(
                                                `${API_BASE_URL}/order/create-checkout-session`,
                                                {
                                                    priceId: tier.price.priceId,
                                                    tokens: tier.items.tokens,
                                                    isSubscription: false
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
