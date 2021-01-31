import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minHeight: '450px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '&:hover': {
            boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)'
        }
    },
    media: {
        height: 180,
    },
});

function HomeCard(props) {
    const classes = useStyles();

    return (
        <NavLink style={{textDecoration: 'none', width: '100%'}} to={props.cardToUrl} exact
                 activeStyle={{color: '#ff4081'}}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.cardImgUrl}
                    title={props.cardImgTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{props.cardTitle}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.cardText}
                        <ul>
                            <li>{props.cardTextLi1}</li>
                            <li>{props.cardTextLi2}</li>
                            <li>{props.cardTextLi3}</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </NavLink>
    );
}

export default HomeCard;