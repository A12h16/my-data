import React,{useState} from 'react';
import { useHistory } from "react-router-dom"

function FromPage(){
    const [selectedData,setSelectedData]=useState("");
    const history= useHistory()
    
    const handlesubmit =(e)=>{
        e.preventDefault();
        history.push({
            pathname:'/grid',
            search:`?data=${selectedData}`
        });
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return(
        <form onsubmit={handleSubmit}>
            <label>
                Selected Data:
                <select value={selectedData} onChange={e=> setSelectedData(e.target.value)}>
                    <option value="data1">Data1</option>
                    <option value="data2">Data2</option>
                    <option value="data3">Data3</option>
                
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>

    );
}
export default FromPage;