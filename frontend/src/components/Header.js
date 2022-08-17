import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import "./style.css"

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <div class="headstyle">
            <Link to="/"><Typography variant='h4'>BOOTCAMP SHOP</Typography></Link>
                <div class="flex">
                <div class="pr-1">
                <Cart />
                </div>
                <Link to="/contato"><Button variant="contained" color="primary">Contato</Button></Link>
                </div>
            </div>
        </Grid>      
    )
}

export default Header;