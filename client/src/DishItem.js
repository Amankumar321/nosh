import { Box, Card, CardContent, Grid, Stack, Switch, Typography } from '@mui/material';
import { grey } from '@mui/material/colors'
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { socket } from './socket';

const DishItem = ({ dish }) => {
    const [isPublished, setIsPublished] = useState(dish.isPublished);
    const [isFetching, setIsFetching] = useState(false);

    const socketSetIsPublished = useCallback((data) => {
        if (data.dishId === dish.dishId) {
            setIsPublished(data.isPublished)
        }
    }, [dish])

    const handleChange = async () => {
        setIsFetching(true);
        try {
            var response = await axios.put('http://localhost:5000/dishes/' + dish.dishId + '/toggle_publish');
            setIsPublished(response.data.isPublished);
        } catch (error) {
            console.error('Error toggling publish status:', error);
        } finally {
            setIsFetching(false);
        }
    }

    useEffect(() => {
        socket.on("changePublished", socketSetIsPublished)
        return () => {
            socket.off("changePublished", socketSetIsPublished)
        }
    }, [isFetching, isPublished, socketSetIsPublished])


    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className='dish-card' sx={{boxShadow: '0px 0px 6px '+grey[400], position: 'relative', ':hover': {boxShadow:'0px 0px 8px '+grey[600]}}}>
                <CardContent sx={{p: 0}}>
                    {
                        isFetching ? <Box position='absolute' width="100%" height="100%" zIndex={100} sx={{backgroundColor: grey[100], opacity: 0.6}} /> : null
                    }
                    <Stack spacing={1}>
                        <img src={dish.imageUrl} alt={dish.dishName} width='100%' style={{aspectRatio: 4/3, objectFit: 'cover'}}></img>
                        <Box px={2}>
                            <Typography className='dish-name' fontFamily='revert-layer' color={grey[800]} fontWeight={600} letterSpacing={0.4}>{dish.dishName}</Typography>
                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                                <Typography fontFamily='revert-layer' color={grey[800]} fontSize={14} letterSpacing={0.6}>Published</Typography>
                                <Switch className='dish-publish-toggler' checked={isPublished} onChange={handleChange} color='primary'></Switch>
                            </Box>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DishItem;