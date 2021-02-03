import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    FormControl,
    FormControlLabel,
    Grid, Icon,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import sectionData from "./sectionData";
import {useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

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
    }
}));


export default function CreateBaccalcForm(props) {
    let { section } = useParams();
    const classes = useStyles();

    const [sessionRadio, setSessionRadio] = useState('principale');

    const initState = session => {
        const objc =  session === 'principale' ? sectionData[section].matiere.sesPrin : sectionData[section].matiere.sesCont;
        const recObj={};
        for (const prop in objc) {
            recObj[section + '-' + prop] = "";
        }
        return recObj;
    };

    const [prinInputs, setPrinInputs] = useState(() => initState('principale'));
    const [contInputs, setContInputs] = useState(() => initState('controle'));

    const MySwal = withReactContent(Swal)

    const handleSessionRadioChange = (event) => {
        setSessionRadio(event.target.value);
    };

    const handleInputChange = (e, session) => {
        const oldObj = session === 'principale' ? {...prinInputs} : {...contInputs};
        oldObj[e.target.name] = e.target.value ;
        if (session === 'principale') setPrinInputs(oldObj);
        else setContInputs(oldObj);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let moy;
        let score;
        if (sessionRadio === 'principale') {
            moy = calcPrincMoy();
            score = calcScore(true);
        } else {
            moy = calcContMoy();
            score = calcScore(false);
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
        })
    }

    function renderMatieres(session) {
        const matieres = [];
        const objc =  session === 'principale' ? sectionData[section].matiere.sesPrin : sectionData[section].matiere.sesCont;
        for (const prop in objc) {
            let matiere = (
                <Grid item xs={12} sm={6} md={4} lg={3} key={section + '-' + prop}>
                    <TextField fullWidth label={objc[prop].name} className={classes.textField}
                               color="primary" variant="outlined" type="number" onChange={(e) => handleInputChange(e, session)}
                               name={section + '-' + prop} value={prinInputs[section + '-' + prop]}/>
                </Grid>
            );
            matieres.push(matiere);
        }
        return matieres;
    }

    function calcPrincMoy(marks = prinInputs) {
        let diviser = 0;
        let moy = 0;

        for (const prop in marks) {
            if (prop !== `${section}-opt`) {
                let coef = parseFloat(sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].coef);
                diviser += coef;
                moy+= parseFloat(marks[prop]) * coef;
            } else if (parseFloat(marks[prop]) > 10) moy+= parseFloat(marks[prop]) - 10;
        }
        console.log('divider ', diviser, 'moy ', moy);
        return moy / diviser;
    }

    function calcContMoy() {
        function replaceHigherMarks() {
            let savePrinMarks = {...prinInputs};
            const saveContMarks = {...contInputs};
            for (let prop in saveContMarks) {
                if (parseFloat(saveContMarks[prop]) > savePrinMarks[prop.replace('Ctrl', '')])
                    savePrinMarks[prop.replace('Ctrl', '')] = saveContMarks[prop];
            }
            return savePrinMarks;
        }

        let changedMarks = replaceHigherMarks();
        return calcPrincMoy(changedMarks);
    }

    function calcScore(isPrincipale) {
        function replaceMarksPrinX2PlusCont() {
            let savePrinMarks = {...prinInputs};
            const saveContMarks = {...contInputs};
            for (let prop in saveContMarks) {
                let prinProp = prop.replace('Ctrl', '');
                savePrinMarks[prinProp] = (((parseFloat(savePrinMarks[prinProp]) * 2) + parseFloat(saveContMarks[prop])) / 3);
            }
            return savePrinMarks;
        }

        let score = 0;

        let moye = isPrincipale ? calcPrincMoy(prinInputs) : (((calcPrincMoy(prinInputs) * 2) + calcContMoy()) / 3) ;
        let marks = isPrincipale ? prinInputs : replaceMarksPrinX2PlusCont();

        for (let prop in marks) {
            if (sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].hasOwnProperty('coefScr'))
                score += parseFloat(marks[prop]) * parseFloat(sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].coefScr);
        }

        score += parseFloat(moye) * 4;
        return score;
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
        </form>
    );
}

