import React, { useState, useEffect }  from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { DashboardLayout } from '../components/dashboard-layout';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { height } from '@mui/system';
import { NavItem } from '../components/nav-item';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const styles = {
  paperContainer: {
      backgroundImage: `url("/static/images/cancha1.png")`
  },
  cardStyle : { 
    width: '8vw',
    transitionDuration: '0.3s',
    height: '6.4vw',
    opacity: 0.8,
    backgroundColor: 'transparent',
},
divStyle : { 
  padding: '40',
  width: '48.5%',
  height:'10px'
}
};




function ProductSelectedItem() {
  const [colorSelected, setColorSelected] = useState(["white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white"])
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    if(!checked){
      updateAll("red")
    }else{
      updateAll("white")
    }
    setChecked(event.target.checked);

  };

  const handleColor = (index) => {
    console.log("Selecciono Sector: "+index);
    if(colorSelected[index] === "white"){
      updateByIndex("red",index)    
    }else{
      updateByIndex("white",index) 
    }
    console.log(colorSelected)
  }
  
  const updateByIndex = (newValue, index) => {
    setColorSelected(values => values.map((value, i) => i === index ? newValue: value))
  }

  const updateAll = (newValue) => {
    setColorSelected(values => values.map((value) => newValue))
  }

  return (
    
    <Box sx={{
      mx: 'auto',
      width: 1730,
      p: 5,
      m: 5,
      bgcolor: (theme) =>
        theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
    
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      borderRadius: 2,
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: '700',
    }}
  >
<div>
   <td><FormControlLabel
            control={
              <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
             
            />
            }
            label="Seleccionar todos los Sectores"
          /></td>
          <td>  <NavItem
              key={11111}
              href={'/products'}
              title="Aceptar Seleccion"
              inactive={true}
            /></td>
    
         </div>
<div style={styles.divStyle}>
  <p/>
</div>
      <div style={styles.divStyle}>
      <Grid container spacing={0.5} columns={16} style={styles.paperContainer}>
        {Array.from(Array(16)).map((_, index) => (
          <Grid item xs={1} sm={4} md={4} key={index } spacing={1}>
          <Card style={styles.cardStyle}>
          <CardContent >
           
              <Button key={index} variant="outlined" style={{background:colorSelected[index], align:'center', display:'flex'}} onClick={() => {handleColor(index)}}>Sect-{index}</Button>
            
            </CardContent>
            </Card>
       
          </Grid>
        ))}
      </Grid>
      </div>
      
       
    </Box>
     
  );
}

ProductSelectedItem.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ProductSelectedItem;
