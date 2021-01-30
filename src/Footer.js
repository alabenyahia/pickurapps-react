import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: '#ffffff',

    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            Made with <Favorite color='secondary' fontSize='small' style={{margin: '0 4px'}}/> by pickurapps © {new Date().getFullYear()}
        </footer>
    );
}