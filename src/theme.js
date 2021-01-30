import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#673ab7',
            light: '#9a67ea',
            dark: '#320b86'
        },
        secondary: {
            main: '#ff4081',
            light: '#ff79b0',
            dark: '#c60055'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none'
            }
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#673ab7',
                color: '#ffffff'
            }
        }
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    }
});

export default theme;