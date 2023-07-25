import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './Main.css'
import Main2 from './Main2';

function Main1({updateMessage}) {

  const [row, setRow] = useState([]);

  const navigate = useNavigate();
  const goToFirst = ()=>{
    updateMessage("*Please Fill your details first*");
    navigate('/');
  }

  const fetchData = async ()=>{
    const temp=await fetch("https://jsonplaceholder.typicode.com/posts");
    const tempJson = await temp.json();
    setRow(tempJson);
    // console.log(tempJson);
  }

    useEffect(() => {
        let data=JSON.parse(localStorage.getItem("user"));
        if(data===null)
            goToFirst();
        else 
          localStorage.clear();
        fetchData();
    }, [])
    
    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'userId', headerName: 'User ID', width: 100 },
      {
        field: 'title',
        headerName: 'Title',
        width: 200,
      },
      {
        field: 'body',
        headerName: 'Body',
        width: 400,
      }
    ];


  return (
    <div>
      <h1>Table Data</h1>
    <Box sx={{ height: 400, width: '100%', maxWidth: "1000px", margin: "auto" }}>
      <DataGrid
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <Main2/>
    </div>
  )
}

export default Main1