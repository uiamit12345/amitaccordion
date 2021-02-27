import React, { useState } from 'react'
import Select from "@material-ui/core/select"
import InputLabel from "@material-ui/core/InputLabel"
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      fontSize: 16,
      borderbottom: 4,
      '& .MuiSelect-icon-root': {
          fill: "#db3725"
      }
    },
    select: {
        minWidth: 240,
        fontSize: 16,
        fontWeight: 700,
        '&:after': {
            borderColor: "#58160F",
            borderWidth: 3,
        },
        '&:hover :before': {
            borderColor: "#db3725",
            borderWidth: 3,
        },
        '&:before': {
            borderWidth: 3,
            borderColor: "#db3725",
        }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputLabel: {
        marginTop: 8,
        fontSize: 16,
        color: "#5e7079",
        fontWeight: 500
    },
    icon: {
        color: "#db3725",
        width: 24,
        height: 24,
        right: "-6px",
    }
  }));

const Filter = ({degreeLevel, handleChange}) => {
    
    const classes = useStyles();

    

    return (
        <div className="filter" style={{ fontSize: '1.6rem' }}>
            
            <Select  
                className={classes.select} 
                value={degreeLevel} 
                inputProps={{
                        classes: {
                            icon: classes.icon,
                        }
                }} 
                onChange={handleChange}>
            <MenuItem value={"All degree levels"} style={{ fontSize: '1.6rem' }}>All degree levels</MenuItem>
            <MenuItem value={"Bachelor's"} style={{ fontSize: '1.6rem' }}>Bachelor's</MenuItem>
            <MenuItem value={"Master's"} style={{ fontSize: '1.6rem' }}>Master's</MenuItem>
            </Select>
            <InputLabel className={classes.inputLabel}>Degree level</InputLabel>
        </div>
    )
}

export default Filter
