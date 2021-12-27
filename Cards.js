import React from 'react'
import  './cards.css'
import {Button} from '@material-ui/core'// @mui/material/Button';

export default function Cards() {
    return (
        <div className='cards-container'>
              <Button variant="contained">Till Date Expenses</Button>
              <Button variant="contained">Monthly Expenses</Button>
              <Button variant="contained">YearLy Expenses</Button>
              <Button variant="contained">Total Expenses</Button>
        </div>
        
    )
}
