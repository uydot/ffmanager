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
import { columns, rows } from '../__mocks__/materials';

function MaterialsSelected(){
    return (
        <Box sx={{ p: 6,
            m: 5,}}>
             <div>
        <td>  <NavItem
              key={11111}
              href={'/products'}
              title="Aceptar Materiales Seleccionados"
              inactive={true}
            /></td>
    
        </div>
        
        
<Box
      sx={{
        height: 400,
        width: 0.5,
       
        '& .MuiDataGrid-cell--editable': {
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#376331' : 'rgb(217 243 190)',
        },
       
        p: 0,
        m: 5,
       
        
      }}
    >
       
     
    <DataGrid
      rows={rows}
      columns={columns}
      isCellEditable={(params) => params.row.cantidad % 2 === 0}
      sx={{border: 2}}
    />
     
     </Box>
     </Box>
    )
}

MaterialsSelected.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default MaterialsSelected;