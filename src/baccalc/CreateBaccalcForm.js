import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    FormControl,
    FormControlLabel,
    Grid, Icon, IconButton,
    Radio,
    RadioGroup, Snackbar, SnackbarContent,
    TextField,
    Typography
} from "@material-ui/core";
import sectionData from "./sectionData";
import {useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import CloseIcon from '@material-ui/icons/Close'
import {calcContMoy, calcPrincMoy, calcScore, validateInputs} from "./baccalcUtils";
import Confetti from 'react-confetti'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    textField: {
        '& .MuiFormHelperText-root': {
            color: theme.palette.error.main
        }
    },
    gridStyle: {
        margin: '16px 0',
        '&.MuiGrid-spacing-xs-2': {
            width: '100%',
            margin: 0
        }
    },
    btnStyle: {
        '@media screen and (max-width:600px)': {
            width: '100%'
        }
    },
    h3Style: {
        '@media screen and (max-width:960px)': {
            fontSize: '2rem'
        },
        '@media screen and (max-width:600px)': {
            fontSize: '1.5rem'
        }
    },
    swalHStyle: {
        margin: '0.5rem',
        fontSize: '1rem',
        color: '#ffffff'
    },
    swalPStyle: {
        margin: '0.3rem',
        color: '#ffffff'
    },
    toastStyle: {
        backgroundColor: '#ff4444'
    }
}));


export default function CreateBaccalcForm(props) {
    let { section } = useParams();
    const classes = useStyles();

    const [sessionRadio, setSessionRadio] = useState('principale');

    const initInputsState = session => {
        const objc =  session === 'principale' ? sectionData[section].matiere.sesPrin : sectionData[section].matiere.sesCont;
        const recObj={};
        for (const prop in objc) {
            recObj[section + '-' + prop] = "";
        }
        return recObj;
    };

    const [prinInputs, setPrinInputs] = useState(() => initInputsState('principale'));
    const [contInputs, setContInputs] = useState(() => initInputsState('controle'));
    const [isToastOpen, setIsToastOpen] = useState(false);
    const [isConfettiOpen, setIsConfettiOpen] = useState(false);

    const initToDisableState = () => {
        let state = [];
        for (const prop in sectionData[section].matiere.sesCont) {
            if (sectionData[section].matiere.sesCont[prop].hasOwnProperty('toDisable')) {
                state.push({toDisable: section + '-' + prop, disabled: false});
            }
        }

        return state;
    };

    const [inputsToDisable, setInputsToDisable] = useState(() => initToDisableState());

    const MySwal = withReactContent(Swal);

    const handleSessionRadioChange = (event) => {
        setSessionRadio(event.target.value);
    };

    const handleInputChange = (e, session) => {
        const oldObj = session === 'principale' ? {...prinInputs} : {...contInputs};
        oldObj[e.target.name] = e.target.value ;
        if (session === 'principale') setPrinInputs(oldObj);
        else setContInputs(oldObj);
        if (session === 'controle' && inputsToDisable.length >0) {
            for (let i=0; i<inputsToDisable.length; i++) {
                if (e.target.name === inputsToDisable[i].toDisable) {
                    for (let j=0; j<inputsToDisable.length; j++) {
                        if (j===i) continue;
                        let oldArr = [...inputsToDisable];
                        if (e.target.value.length > 0) {
                            oldArr[j].disabled = true;
                            setInputsToDisable(oldArr);
                        } else {
                            oldArr[j].disabled = false;
                            setInputsToDisable(oldArr);
                        }
                    }
                }
            }
        }
    };

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsToastOpen(false);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateInputs(sessionRadio, prinInputs, contInputs, inputsToDisable)) {
            let moy;
            let score;
            if (sessionRadio === 'principale') {
                moy = calcPrincMoy(prinInputs, section);
                score = calcScore(true, prinInputs, contInputs, section, inputsToDisable);
            } else {
                moy = calcContMoy(prinInputs, contInputs, section, inputsToDisable);
                score = calcScore(false, prinInputs, contInputs, section,inputsToDisable);
            }

            const swalContent = (
                <>
                    <h6 className={classes.swalHStyle}>Votre Moyenne:</h6>
                    <p className={classes.swalPStyle}>{moy}</p>
                    <h6 className={classes.swalHStyle}>Votre Score:</h6>
                    <p className={classes.swalPStyle}>{score}</p>
                </>
            );

            MySwal.fire({
                html: swalContent,
                padding: '1rem',
                background: moy >= 10 ? '#00C851' : '#ff4444',
                confirmButtonColor: moy >= 10 ? '#ff4081' : '#673ab7',
            }).then(() => {
                setIsConfettiOpen(false);
            });
            if (moy >= 10) {
                setIsConfettiOpen(true);
            }
        } else {
            setIsToastOpen(true);
        }

    }

    function renderMatieres(session) {
        const matieres = [];
        const objc =  session === 'principale' ? sectionData[section].matiere.sesPrin : sectionData[section].matiere.sesCont;
        for (const prop in objc) {
            let disabledObjIndex = false;
            if (session === 'controle' && inputsToDisable.length > 0 ) {
                for (let i=0; i<inputsToDisable.length; i++) {
                    if (inputsToDisable[i].toDisable === section + '-' + prop) disabledObjIndex = i;
                }
            }
            let matiere = (
                <Grid item xs={12} sm={6} md={4} lg={3} key={section + '-' + prop}>
                    <TextField fullWidth label={disabledObjIndex !== false ? inputsToDisable[disabledObjIndex].disabled ? 'Désactivé' : objc[prop].name : objc[prop].name} className={classes.textField}
                               disabled={disabledObjIndex !== false ? inputsToDisable[disabledObjIndex].disabled : false}
                               color="primary" variant="outlined" type="number" onChange={(e) => handleInputChange(e, session)}
                               name={section + '-' + prop} value={prinInputs[section + '-' + prop]}/>
                </Grid>
            );
            matieres.push(matiere);
        }
        return matieres;
    }



    return (
        <form className={classes.root} onSubmit={handleFormSubmit} method="POST" noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.h3Style} component="h3" variant="h3" display="block" color="secondary">Choisissez votre Session</Typography>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="sessionradio" name="sessionradio" value={sessionRadio} onChange={handleSessionRadioChange}>
                            <FormControlLabel value="principale" control={<Radio />} label="Session Principale"/>
                            <FormControlLabel value="controle" control={<Radio />} label="Session Controle" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Typography className={classes.h3Style} component="h3" variant="h3" display="block" color="secondary">{sessionRadio === 'principale' ? 'Entrez vos Note ' : 'Entrez vos notes de principale'}</Typography>
                    <Grid className={classes.gridStyle} container spacing={2}>{renderMatieres('principale')}</Grid>
                </Grid>
                {
                    sessionRadio === 'controle' &&
                    <Grid item xs={12}>
                        <Typography className={classes.h3Style} component="h3" variant="h3" display="block" color="secondary">Entrez vos notes de controle</Typography>
                        <Grid className={classes.gridStyle} container spacing={2}>{renderMatieres('controle')}</Grid>
                    </Grid>
                }
                <Grid item xs={12}>
                    <Button className={classes.btnStyle} size='large' endIcon={<Icon>send</Icon>} type="submit" variant="contained" color="secondary">Calculer</Button>
                </Grid>
            </Grid>
            <Snackbar
                open={isToastOpen}
                autoHideDuration={3000}
                onClose={handleToastClose}

            >
                <SnackbarContent
                    message="Un des Notes est invalide"
                    className={classes.toastStyle}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleToastClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }/>
            </Snackbar>
            {
                isConfettiOpen && <Confetti/>
            }

        </form>
    );
}

