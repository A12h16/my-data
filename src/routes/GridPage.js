import React,{useEffect,useState} from 'react';
import {useLocation}  from 'react-router-dom';
import {AgGridReact} from 'ag-grid-react';

function GridPage(){
    const[data,setData]=useState([]);
    const location= useLocation();

    useEffect(()=>{
        const fetchDtata =async()=>{
            const response=await fetch(`https://my-api.com/data?data=${location.search.split('='[1])}`);
            const data=await response.json();
            setData(data);
        };
        fetchDtata(0);
    },[location]);

    return(
        <div className='ag-theme-material'>
            <AgGridReact
           // columnsDefs={columnDefs}
            rowData={data}
         //   onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={10}
            sorting={true}
            filter={true}/>
        </div>
    )
}
export default GridPage