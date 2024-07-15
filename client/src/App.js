import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishList from './DishList';
import { deepOrange } from '@mui/material/colors';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import { Tab, Tabs } from '@mui/material'

const App = () => {
    const [dishes, setDishes] = useState([]);

    const theme = createTheme({
        palette: {
            primary: deepOrange
        }
    });

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/dishes');
                setDishes(response.data);
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };

        fetchDishes();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box maxWidth='lg' margin='auto' px={2} py={2}>
                <Typography variant='h3' fontWeight={600} fontFamily='revert-layer' letterSpacing={1} color='primary'>DASHBOARD</Typography>
                <Typography variant='h6' fontWeight={600} py={2} fontFamily='revert-layer' letterSpacing={1}>What would you eat today?</Typography>
                <Box borderBottom={1} borderColor='divider' my={2} >
                    <Tabs value="1" variant='scrollable' textColor='inherit' TabIndicatorProps={{style: {backgroundColor: 'primary'}}}>
                        <Tab label="Recommended" value="1" />
                        <Tab label="Breakfast" value="2" />
                        <Tab label="Lunch" value="3" />
                        <Tab label="Dinner" value="4" />
                        <Tab label="Ice Cream" value="5" />
                        <Tab label="Coffee" value="6" />
                    </Tabs>
                </Box>
                <Box py={2}>
                    <DishList dishes={dishes} />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;
