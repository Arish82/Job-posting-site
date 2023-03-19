import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Components/Navbar'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: "2em",
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    paper: {
        margin: "auto",

    },
    container:{
      height: "40vh",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    btn: {
      textDecoration: "none",
      color: "white",
    }
  }));

export default function Home() {
    const classes=useStyles();
  return (
    <>
        <Navbar />
        <Container className={classes.container}>
          <Button variant='contained' color='primary' >
            <Link to='/post-job' className={classes.btn} >Post A Naukari</Link>
          </Button>
        </Container>
    </>
  )
}
