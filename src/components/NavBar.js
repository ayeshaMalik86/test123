import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Breadcrumbs, Link } from '@mui/material';
import TissueIcon from '@mui/icons-material/LocalFlorist';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <>
      {/* Moving text strip */}
      <Box sx={{ width: '100%', backgroundColor: '#fff', py: 0.5 }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#DC3B6B', 
            fontWeight: 'bold', 
            overflow: 'hidden', 
            whiteSpace: 'nowrap', 
            animation: 'moveText 30s linear infinite'
          }}
        >
          Delivery charges are Rs.199, and FREE delivery on orders above Rs.2000.
        </Typography>
      </Box>

      <AppBar position="static" sx={{ backgroundColor: '#DC3B6B' }}>
        <Toolbar>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <TissueIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1 }}>
              Comfort Tissue
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 2, justifyContent: 'center', pr: 16 }}>
            <Link 
              color="inherit" 
              href="/shop" 
              sx={{ 
                mx: 2, 
                fontSize: '0.999rem', 
                textDecoration: 'none',
                position: 'relative',
                px: 1,
                py: 0.5,
                '&:hover': {
                  color: '#DC3B6B', 
                  backgroundColor: '#FFDDC1', 
                  borderRadius: '4px',
                  boxShadow: '0 0 0 2px #DC3B6B',
                },
              }}
            >
              Shop
            </Link>
            <Link 
              color="inherit" 
              href="/about-us" 
              sx={{ 
                mx: 2, 
                fontSize: '0.999rem', 
                textDecoration: 'none',
                position: 'relative',
                px: 1,
                py: 0.5,
                '&:hover': {
                  color: '#DC3B6B', 
                  backgroundColor: '#FFDDC1', 
                  borderRadius: '4px',
                  boxShadow: '0 0 0 2px #DC3B6B',
                },
              }}
            >
              About Us
            </Link>
            <Link 
              color="inherit" 
              href="/contact-us" 
              sx={{ 
                mx: 2, 
                fontSize: '0.999rem', 
                textDecoration: 'none',
                position: 'relative',
                px: 1,
                py: 0.5,
                '&:hover': {
                  color: '#DC3B6B', 
                  backgroundColor: '#FFDDC1', 
                  borderRadius: '4px',
                  boxShadow: '0 0 0 2px #DC3B6B',
                },
              }}
            >
              Contact Us
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Breadcrumbs component */}
      <Box sx={{ p: 2, backgroundColor: '#ffffff', boxShadow: 0 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '0.8rem' }}>
          <Link color="inherit" href="/" sx={{ fontSize: 'inherit', pl: 7 }}>
            Home
          </Link>
          <Link color="inherit" href="/products" sx={{ fontSize: 'inherit' }}>
            Products
          </Link>
          <Typography color="textPrimary" sx={{ fontSize: 'inherit' }}>
            Comfort Tissue
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* CSS for moving text */}
      <style>
        {`
          @keyframes moveText {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
