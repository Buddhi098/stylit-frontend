import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Pagination,
  Stack,
} from "@mui/material";

const reviews = [
  {
    id: 1,
    name: "Alayne A.",
    date: "01/12/24",
    rating: 5,
    title: "Perfect Essential",
    comment:
      "This is an amazing staple for my wardrobe. So soft and effortless, lightweight but warm.",
  },
  {
    id: 2,
    name: "John D.",
    date: "02/12/24",
    rating: 4,
    title: "Great Quality",
    comment:
      "Very pleased with the quality and fit. Perfect for casual wear.",
  },
  {
    id: 3,
    name: "Sarah M.",
    date: "03/12/24",
    rating: 3,
    title: "Good but not great",
    comment:
      "The fabric is nice but the fit wasn't as expected. Still a good buy.",
  },
  {
    id: 4,
    name: "Emily R.",
    date: "04/12/24",
    rating: 5,
    title: "Highly Recommend",
    comment:
      "Love this product! It’s versatile and goes with everything in my closet.",
  },
  {
    id: 5,
    name: "Michael B.",
    date: "05/12/24",
    rating: 2,
    title: "Not Impressed",
    comment:
      "The quality is not up to the mark for the price. Expected better.",
  },
  {
    id: 6,
    name: "Jessica T.",
    date: "06/12/24",
    rating: 5,
    title: "Favorite Purchase",
    comment:
      "This is my favorite piece of clothing right now. So comfortable and stylish!",
  },
  {
    id: 7,
    name: "Chris L.",
    date: "07/12/24",
    rating: 4,
    title: "Solid Choice",
    comment:
      "Good material and fit. Would buy again in a different color.",
  },
  {
    id: 8,
    name: "Patricia W.",
    date: "08/12/24",
    rating: 5,
    title: "Wonderful Product",
    comment:
      "Exceeded my expectations. The fabric feels great and it looks fantastic.",
  },
  {
    id: 9,
    name: "Robert C.",
    date: "09/12/24",
    rating: 3,
    title: "Average",
    comment:
      "It's okay, nothing special. The design could be improved.",
  },
  {
    id: 10,
    name: "Linda S.",
    date: "10/12/24",
    rating: 4,
    title: "Pretty Good",
    comment:
      "Nice and soft, fits well. I’m happy with my purchase.",
  },
  {
    id: 11,
    name: "David K.",
    date: "11/12/24",
    rating: 5,
    title: "Excellent Buy",
    comment:
      "Worth every penny. High-quality material and perfect fit.",
  },
  {
    id: 12,
    name: "Alice B.",
    date: "12/12/24",
    rating: 2,
    title: "Disappointed",
    comment:
      "The product didn’t match the description. Not what I expected.",
  },
  {
    id: 13,
    name: "Steve G.",
    date: "13/12/24",
    rating: 5,
    title: "Absolutely Love It",
    comment:
      "Best purchase I’ve made in a long time. Highly recommend!",
  },
  {
    id: 14,
    name: "Nina F.",
    date: "14/12/24",
    rating: 4,
    title: "Good Value",
    comment:
      "Good value for the price. Comfortable and looks nice.",
  },
  {
    id: 15,
    name: "Oliver J.",
    date: "15/12/24",
    rating: 3,
    title: "Just Okay",
    comment:
      "It's okay, but there are better options out there. Fabric is a bit rough.",
  },
];


const itemsPerPage = 5;

const Section5 = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedReviews = reviews.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ maxWidth: "80%", height:"80vh", margin: "auto", padding: 2 , position:"relative" }}>
      <Stack marginBottom={4}>
        <Typography variant="body1_alata" >
          4.4 ★★★★★
        </Typography>
        <Typography variant="body1_alata">Based on 14 reviews</Typography>
      </Stack>
      {paginatedReviews.map((review) => (
        <Stack
          direction={"row"}
          key={review.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 ,width:"20%"}}>
            <Avatar>{review.name.charAt(0)}</Avatar>
            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography variant="body1_alata">{review.name}</Typography>
              <Typography variant="body2_alata" color="textSecondary">
                Verified Buyer
              </Typography>
            </Stack>
          </Box>

          <Stack
            direction="column"
            sx={{ display: "flex", alignItems: "left", width:"60%"}}
          >
            <Stack direction={"row"}>
              <Rating value={review.rating} readOnly />
              <Typography variant="body1_alata" sx={{ ml: 1 }}>
                {review.title}
              </Typography>
            </Stack>

            <Typography variant="body2_nunito" sx={{ mt: 1 }}>
              {review.comment}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="body2_alata" color="textSecondary" sx={{ mt: 1 }}>
              {review.date}
            </Typography>
          </Stack>
        </Stack>
      ))}
      <Pagination
        count={Math.ceil(reviews.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        sx={{ display: "flex", justifyContent: "center", mt: 2  , position:"absolute" , bottom:"20px" , left:"50%" , transform:"translateX(-50%)" }}
      />
    </Box>
  );
};

export default Section5;
