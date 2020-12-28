import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));

export default function Libro() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    console.log(data)

  };
  return (

    
    <div className={classes.root}>
           <form onSubmit={handleSubmit(onSubmit)}>

       
      <Grid container spacing={1}>

        <Grid item md={12}>
 
              <Grid item md={3}>
              <TextField id="nombreLibro" name="nombreLibro" label="Libro"
              inputRef={register}
              />
              
              </Grid>
              <Grid item md={3}>
                
              </Grid>
         
        </Grid>
        <Button type="submit">Submit</Button>
      </Grid>
      </form>
    </div>
  );
}