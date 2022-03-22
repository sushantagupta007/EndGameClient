import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import {Container,Box } from '@mui/material';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';


const ReviewCard = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    console.log(review)
    const filterArray = review.filter(item => item.decision === "APPROVE")
    console.log(filterArray)
    return (
        <Container>
            <Typography variant="h4" sx={{textAlign:'center', fontWeight:'bold'}}> Patient's FeedBack </Typography>
            <Box   sx={{ display: 'flex', flexWrap:'wrap' }}>
                {
                    filterArray.map(item =>
                        <SingleReviewCard item={item}></SingleReviewCard>
                    )
                }
            </Box>
        </Container>


        
    );

}
export default ReviewCard;