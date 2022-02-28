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
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../__mocks__/actividades';

function Actividades(){
    const [checkboxSelection, setCheckboxSelection] = React.useState(true);

    return (
        <Box sx={{ p: 6,
            m: 5,}}>
             <div>
        <td>  <NavItem
              key={11111}
              href={'/products'}
              title="Aceptar Actividades Seleccionados"
              inactive={true}
            /></td>
    
        </div>
        
        
<Box
      sx={{
        height: 400,
        width: 0.5,
        p: 0,
        m: 5,
       
        
      }}
    >
       
       <div style={{ width: '100%' }}>
    
    
    
      <div style={{ height: 400 }}>
        <DataGrid checkboxSelection={checkboxSelection} rows={rows}
      columns={columns} />
      </div>
    </div>

     
    
     
     </Box>
     </Box>
    )
}

Actividades.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default Actividades;