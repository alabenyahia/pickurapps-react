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
        MuiPaper: {
            root: {
                backgroundColor: '#673ab7',
                color: '#ffffff'
            }
        }
    }
});

export default theme;