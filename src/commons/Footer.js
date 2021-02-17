import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <span style={{display: 'block', marginBottom: '8px'}}>✌</span>
            <span style={{display: 'block'}}>pickurapps © {new Date().getFullYear()}</span>
        </footer>
    );
}