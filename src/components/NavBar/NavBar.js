import React from 'react';
import { Grid, Paper, Typography, Container, Box, AppBar, Toolbar, useTheme } from "@material-ui/core"
import styles from './NavBar.module.scss';

function NavBar(props) {
    const theme = useTheme()
    return (
        <AppBar position="fixed" color="secondary">
            <Toolbar variant="dense">
                <Typography fontFamily={theme.typography.fontFamily} variant="h3" color="secondary.contrastText">
                    The Ground You Walk On
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;