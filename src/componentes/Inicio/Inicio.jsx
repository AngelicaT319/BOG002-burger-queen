import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";




export const Inicio = () => {
    const classes = useStyles(); 
  return (
     
       <Grid
       container direction="row" justify="space-evenly" alifnItems="center" >
       
      <Link to="/mesero">
      <Button className={classes.Btn}>Mesero</Button>                 
      </Link>

      <Link to="/Cocina">
      <Button className={classes.Btn}>Cocina</Button>       
      </Link>
     
      </Grid>       
         
  );
};
const useStyles = makeStyles({
    Btn: { 
      background: '#C62020',
      border: 0,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    root: {
      backgroundImage: `url()`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
  },
  });