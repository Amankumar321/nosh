import React from 'react';
import DishItem from './DishItem';
import { Grid } from '@mui/material';

const DishList = ({ dishes }) => {
    return (
        <Grid container rowSpacing={6} columnSpacing={3}>
            {dishes.map(dish => (
                <DishItem key={dish.dishId} dish={dish} />
            ))}
        </Grid>
    );
};

export default DishList;
