import React from 'react';
import styles  from './Input.module.css';
import { InputBase, Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


  

const Input = ({fetchData, show, input}) => {



  const inputPosition = {
    height: show === false && '100vh',
    marginTop: show === true && '70px'
  }

    return (
        <div className={styles.input} style={{...inputPosition}}>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 400 }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search article' onChange={input} />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={fetchData}>
        <Search />
      </IconButton>
    </Paper>
          </div>
    );
}
 
export default Input;