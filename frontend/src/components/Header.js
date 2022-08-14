import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import "./style.css"

const Header = () => {
    return(
        <div class="headstyle">
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <div class="">
            <Link to="/"><Typography variant='h4'>BOOTCAMP SHOP</Typography></Link>
            </div>
            <div class="flex">
            <div class="pr-1">
            <Link to="/contato"><Button variant="outlined" color="primary">Contato</Button></Link>
            </div>
            <Cart />
            </div>   
        </Grid>  
        </div>      
    )
}

export default Header;