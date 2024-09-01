import React, { useState } from 'react';
import { Container, Grid, Typography, Button, TextField, Card, CardContent, Box, Tabs, Tab } from '@mui/material';
import Navbar from './NavBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);

  const handleAddToCart = () => {
    alert(`Added ${quantity} Comfort Tissue to your cart.`);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    customPaging: (i) => (
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#DC3B6B',
          opacity: 0.75,
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <ul style={{ margin: '0', padding: '0', display: 'flex', justifyContent: 'center' }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, position: 'relative', height: '370px' }}>
              <Slider {...sliderSettings}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1583496597549-0fd8b25e34e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Comfort Tissue"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1585690359409-9020f3602bdb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Comfort Tissue"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1584556812952-905ffd0c611a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Comfort Tissue"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </Slider>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, height: '370px' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
                  Comfort Toilet Paper
                </Typography>
                <Typography variant="h5" color="#DC3B6B" gutterBottom sx={{ mb: 2 }}>
                  RS.760
                </Typography>
                <Typography variant="body1" paragraph>
                  Experience unparalleled comfort with Comfort Tissue, the ultimate choice for ultra-soft and high-quality toilet paper. Crafted from premium materials, Comfort Tissue offers a gentle touch that is kind to your skin while providing exceptional strength and absorbency. With 12 rolls per pack, Comfort Tissue combines luxury and practicality, making it an essential addition to any home or office. Indulge in the softness and quality you deserve with Comfort Tissue.
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <TextField
                    type="number"
                    label="Quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    InputProps={{ inputProps: { min: 1 } }}
                    variant="outlined"
                    size="small"
                    sx={{ mr: 2, width: '80px' }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleAddToCart}
                    sx={{ backgroundColor: '#DC3B6B' }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Tabs for Reviews and Shipping Information */}
          <Grid item xs={12}>
            <Box sx={{ width: '100%', mt: 4 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                centered
                sx={{
                  '& .MuiTabs-indicator': { backgroundColor: '#DC3B6B' }, // Indicator color
                }}
              >
                <Tab
                  label="REVIEWS"
                  sx={{
                    textTransform: 'none',
                    fontSize: '1rem',
                    pr: 8,
                    color: '#DC3B6B',
                    '&.Mui-selected': {
                      color: '#EA83A2', 
                    },
                  }}
                />
                <Tab
                  label="SHIPPING INFORMATION"
                  sx={{
                    textTransform: 'none',
                    fontSize: '1rem',
                    color: '#DC3B6B',
                    '&.Mui-selected': {
                      color: '#EA83A2', 
                    },
                  }}
                />
              </Tabs>
              <Box sx={{ mt: 2 }}>
                {tabValue === 0 && (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: '200px' }}
                  >
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                      No reviews yet. Be the first to review Comfort Tissue!
                    </Typography>
                  </Box>
                )}
                {tabValue === 1 && (
                  <Box p={2} textAlign="left">
                    <Box mb={3}>
                      <Typography variant="h6" color="#DC3B6B" gutterBottom sx={{ fontSize: '1rem',pl:30 }}>
                        What is the minimum order amount?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', pl:30 }}>
                        The minimum order amount is Rs.500 (excluding the shipping charges).
                      </Typography>
                    </Box>

                    <Box mb={3}>
                      <Typography variant="h6" color="#DC3B6B" gutterBottom sx={{ fontSize: '1rem',pl:30 }}>
                        What are the shipping charges?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' ,pl:30}}>
                        The standard delivery charges are Rs.199 only. However, we offer FREE Shipping on all orders above Rs.2000.
                      </Typography>
                    </Box>

                    <Box mb={3}>
                      <Typography variant="h6" color="#DC3B6B" gutterBottom sx={{ fontSize: '1rem',pl:30 }}>
                        How long does it take to deliver the orders?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem',pl:30 }}>
                        Our delivery time is between 2-4 working days. However, delivery can take up to 7 working days during busy shopping seasons or mega sales events.
                      </Typography>
                    </Box>

                    <Box mb={3}>
                      <Typography variant="h6" color="#DC3B6B" gutterBottom sx={{ fontSize: '1rem',pl:30 }}>
                        Do you deliver to my city?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' ,pl:30}}>
                        We deliver across all major cities. If you are unsure, please contact our customer support to check delivery availability in your area.
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductPage;
