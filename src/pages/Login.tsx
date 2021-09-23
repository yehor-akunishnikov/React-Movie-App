import React from 'react'
import { Paper, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core';


export const Login = () => {
  return (
    <div className="center-container">
      <Paper sx={{
        maxWidth: 500,
        width: '100%',
      }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Paper>
    </div>
  );
};