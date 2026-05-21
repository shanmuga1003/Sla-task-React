import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@mui/material";

function ProductCard() {
  return (
    <Card sx={{ width: 300, m: 3 }}>
      
      <CardHeader
        title="Wireless Headphones"
        subheader="Electronics"
      />

      <CardContent>
        <Typography variant="body1">
          High quality wireless headphones with noise cancellation.
        </Typography>

        <Typography
          variant="h6"
          sx={{ mt: 2 }}
        >
          ₹2999
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained">
          Buy Now
        </Button>

        <Button size="small" variant="outlined">
          Add to Cart
        </Button>
      </CardActions>

    </Card>
  );
}

export default ProductCard;