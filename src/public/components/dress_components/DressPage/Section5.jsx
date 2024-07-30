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
    name: "Alayne A.",
    date: "01/12/24",
    rating: 5,
    title: "Perfect Essential",
    comment:
      "This is an amazing staple for my wardrobe. So soft and effortless, lightweight but warm.",
  },
  {
    id: 3,
    name: "Alayne A.",
    date: "01/12/24",
    rating: 5,
    title: "Perfect Essential",
    comment:
      "This is an amazing staple for my wardrobe. So soft and effortless, lightweight but warm.",
  },
  {
    id: 4,
    name: "Alayne A.",
    date: "01/12/24",
    rating: 5,
    title: "Perfect Essential",
    comment:
      "This is an amazing staple for my wardrobe. So soft and effortless, lightweight but warm.",
  },
  {
    id: 5,
    name: "Alayne.",
    date: "01/12/24",
    rating: 5,
    title: "Perfect Essential",
    comment:
      "This is an amazing staple for my wardrobe. So soft and effortless, lightweight but warm.",
  },
  {
    id: 6,
    name: "Alayne A.",
    date: "01/12/24",
    rating: 5,
    title: "Perfect Essential",
    comment:
      "This is an amazing staple for my wardrobe. So soft and effortless, lightweight but warm.",
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
    <Box sx={{ maxWidth: "80%", margin: "auto", padding: 2 }}>
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
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
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
            sx={{ display: "flex", alignItems: "left" }}
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
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      />
    </Box>
  );
};

export default Section5;
