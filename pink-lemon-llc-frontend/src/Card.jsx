import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import axios from 'axios';
import { API_URL } from './config';
import { loadStripe } from '@stripe/stripe-js';
import { useAppContext } from './context/app';

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
            'Guida ai migliori prompt*',
            'Supporto email**'
        ],
        price: {
            amount: 5,
            priceId: 'price_1NR8PVCNXWohRZKP0i1ms1cK'
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
        subheader: 'Più popolare',
        description: [
            '250 token al mese',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Supporto email proritario**'
        ],
        price: {
            amount: 10,
            priceId: 'price_1NR8Q6CNXWohRZKPjTPNPnC1'
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
            'Guida ai migliori prompt*',
            'Supporto email e telefonico**'
        ],
        price: {
            amount: 20,
            priceId: 'price_1NR8QYCNXWohRZKPDBL1lnjr'
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
                                                `${API_URL}/order/create-checkout-session`,
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
                                                import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
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
