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

const PricingList = styled('ul')({
    margin: 0,
    padding: 0,
    listStyle: 'none'
});

const tiers = [
    {
        title: 'PinkStart',
        price: '5',
        description: [
            '100 token al mese',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Supporto email**'
        ],
        buttonText: 'Acquista',
        buttonVariant: 'contained',
        color: 'secondary'
    },
    {
        title: 'PinkPro',
        subheader: 'Più popolare',
        price: '10',
        description: [
            '250 token al mese',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Supporto email proritario**'
        ],
        buttonText: 'Acquista',
        buttonVariant: 'contained'
    },
    {
        title: 'PinkStar',
        price: '20',
        description: [
            '600 token al mese',
            'Immagini 1024x1024 pixel',
            'Guida ai migliori prompt*',
            'Supporto email e telefonico**'
        ],
        buttonText: 'Acquista',
        buttonVariant: 'contained'
    }
];
export default function Pricing() {
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
                                <Button fullWidth variant={tier.buttonVariant} color="secondary">
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
