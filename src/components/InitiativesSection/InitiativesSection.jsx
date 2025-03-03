import { Container, Title, Text, Flex, Box, createStyles } from '@mantine/core';
import PODS from './initiatives/PODS';
import ReviewSessions from './initiatives/ReviewSessions';

const useStyles = createStyles((theme) => ({
    title: {
        [theme.fn.smallerThan('780')] : {
            fontSize: '2rem',
        },
    },

    description: {
        [theme.fn.smallerThan('780')] : {
            fontSize: '1rem',
        },
    },

    header: {
        fontWeight: '600',
        [theme.fn.smallerThan('780')] : {
            fontSize: '1.2rem',
        },
    }
}));

const SECTION_TITLE = '<Our Initiatives />';
const SECTION_PHRASE =
    'At LCS, we understand how important building a good portfolio is. That’s why we give students the opportunities to do so!';

const InitiativesSection = () => {
    const { classes } = useStyles();
    return (
        <section id="Initiatives">
            <Container size="xl">
                <Flex direction="column" justify="center" wrap="wrap" gap="md">
                    <Title
                        align="center"
                        variant="gradient"
                        order={1}
                        sx={{ fontSize: '3rem' }}
                        className={classes.title}
                    >
                        {SECTION_TITLE}
                    </Title>
                    <Text
                        span
                        align="center"
                        color="white"
                        sx={{ fontSize: '1.5rem' }}
                        className={classes.description}
                    >
                        {SECTION_PHRASE}
                    </Text>
                    <Text
                        span
                        align="center"
                        color="white"
                        sx={{
                            fontSize: '1.5rem',
                            marginTop: '1.5rem',
                            marginBottom: '1.5rem',
                        }}
                        className={classes.header}
                    >
                        Check out our current projects:
                    </Text>
                </Flex>
                <Container fluid className="space-y-2">
                    <PODS />
                    <ReviewSessions />
                </Container>
            </Container>
        </section>
    );
};

export default InitiativesSection;
