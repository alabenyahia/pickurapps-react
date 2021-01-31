import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Bac Calculator",
        href: "/baccalc",
    },
    {
        label: "Guess 10 Flags",
        href: "/guess10flags",
    },
    {
        label: "Dlilek Mlak",
        href: "/dlilekmlak",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        "@media (max-width: 960px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        width:"170px",
        pointerEvents: "none"
    },
    menuButton: {
        size: "18px",
        marginLeft: "16px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"

    },
    drawerContainer: {
        padding: "8px 0",
        minWidth: "280px",
        width: "100%"
    },
    centerMobileLogo: {
        "@media (max-width: 960px)": {
            margin: "0 auto"
        },
    }
}));

export default function Header() {
    const { header, logo, centerMobileLogo, menuButton, toolbar, drawerContainer} = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {pickurappsLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div className={centerMobileLogo}>{pickurappsLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: NavLink,
                        exact: href !== '/baccalc',
                        to: href,
                        activeStyle: {color: '#ff4081'},
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const pickurappsLogo = (
        <RouterLink to={'/'}>
            <img src={process.env.PUBLIC_URL + '/imgs/logo.svg'} alt="pickurapps-logo" className={logo}/>
        </RouterLink>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        exact: href !== '/baccalc',
                        component: NavLink,
                        activeStyle: {color: '#ff4081'},
                        className: menuButton,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={header} position='sticky'>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}