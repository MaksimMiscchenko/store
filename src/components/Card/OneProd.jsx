import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import CardMenu from './CardMenu';

export default function OneProd({ item }) {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="240"
                    image={item.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.price}
                    </Typography>
                </CardContent>
                <CardActions >
                    <CardMenu />
                </CardActions>
            </Card>
        </div>
    );
};

