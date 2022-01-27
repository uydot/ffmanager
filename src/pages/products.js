import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import React, { useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { NavItem } from '../components/nav-item';


function Products() {
  const [fechaDesde, setFechaDesde] = React.useState(new Date());
  const [fechaHasta, setFechaHasta] = React.useState(new Date());

  return(
 
  <>
    <Head>
      <title>
        Canchas | Complejo Peñarol
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
      <Box sx={{ pt: 3}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Fecha Desde"
        fechaDesde={fechaDesde}
        onChange={(newValue) => {
          setFechaDesde(newValue);
        }}
      />
    </LocalizationProvider>
     
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Fecha Hasta"
        fechaHasta={fechaHasta}
        onChange={(newValue) => {
          setFechaHasta(newValue);
        }}
      />
    </LocalizationProvider>
      </Box>
        <Box sx={{ pt: 1}}>
          <Grid
            container
            spacing={7}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
                <Box sx={{ flexGrow: 1 }}>
         
            <NavItem
              key={product.id}
              icon={product.icon}
              href={product.href}
              title="Seleccionar Sectores"
               inactive={true}
            />
         
        </Box>
                
            
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 8
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);


}

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;