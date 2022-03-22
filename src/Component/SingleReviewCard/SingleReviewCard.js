import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Rating } from '@mui/material';


const SingleReviewCard = ({item}) => {
    console.log(item)
    return (
        <Card sx={{ maxWidth: 345,p:1,m:1 }}>
          
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {item.dname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {item.review}
                </Typography>
                <Rating sx={{mt:1}} name="read-only" value={item.rating} readOnly />
            </CardContent>
            
        </Card >
    );
};

export default SingleReviewCard;