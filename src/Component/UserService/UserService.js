import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 10},
  {field: 'Services', headerName: 'SERVICES', width: 150},
  {field:'Price',headerName: 'Price',width:100}
];

const rows = [
  { id: 1, Services: 'Ambulance', Price: '1500' },
  { id: 2, Services: 'Blood Screening+Drawing+Grouping', Price: '2100' },
  { id: 3, Services: 'Colposcopy', Price: '400' },
  { id: 4, Services: 'Echo Colour Doppler', Price: '2600' },
  { id: 5, Services: 'Endoscopic ', Price: '12000' },
  { id: 6, Services: 'Biopsy', Price: '20000' },
  { id: 7, Services: 'Bono Marrow', Price: '10500' },

  
];


export default function UserService() {
    const serviceRef = React.useRef()
    
    const totalbil = []
    let currentTotal = 0;
    const handleClick = (e)=>{
        const billAmount = e.row.Price
        
        totalbil.push(billAmount)
        currentTotal= totalbil.map(item=>currentTotal+parseInt(item)).slice(-1)[0]
        console.log(currentTotal)
    }
    
     return (
      <Container> 
            <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onRowClick={handleClick}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
      </Container>
  
  );
}
