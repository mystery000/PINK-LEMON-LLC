/* eslint-disable prettier/prettier */
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
import StripeButton from './components/StripeButton';

const PricingList = styled('ul')({
    margin: 0,
    padding: 0,
    listStyle: 'none'
});

const tiers = [
    {
        title: 'PinkShot',
        price: '5',
        description: [
            '80 token validi un anno',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Nessun abbonamento'
        ],
        buttonText: 'Soon',
        buttonVariant: 'contained',
        color: 'secondary'
    },
    {
        title: 'PinkWeek',
        price: '10',
        description: [
            '200 token validi un anno',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Nessun abbonamento'
        ],
        buttonText: 'Soon',
        buttonVariant: 'contained'
    },
    {
        title: 'PinkLove',
        price: '20',
        description: [
            '500 token validi un anno',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Nessun abbonamento'
        ],
        buttonText: 'Soon',
        buttonVariant: 'contained'
    }
];

export default function PricesPackage() {
    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}>
                        <Card>
                            <CardHeader
                                title={tier.title}
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
                                        ${tier.price}
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
                            {/* <CardActions>
                                <Button fullWidth variant={tier.buttonVariant} color="secondary">
                                    {tier.buttonText}
                                </Button>
                            </CardActions> */}
                            <div
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '16px'
                                }}>
                                <StripeButton price={tier.price} />
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
