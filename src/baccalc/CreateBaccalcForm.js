import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import sectionData from "./sectionData";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    textField: {
        '& .MuiFormHelperText-root': {
            color: theme.palette.error.main
        }
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
        console.log(prinInputs, contInputs);
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

    return (
        <form className={classes.root} onSubmit={handleFormSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography component="h3" variant="h3" display="block" color="secondary">Choisissez votre Session</Typography>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="sessionradio" name="sessionradio" value={sessionRadio} onChange={handleSessionRadioChange}>
                            <FormControlLabel value="principale" control={<Radio />} label="Session Principale"/>
                            <FormControlLabel value="controle" control={<Radio />} label="Session Controle" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Typography component="h3" variant="h3" display="block" color="secondary">{sessionRadio === 'principale' ? 'Entrez vos Note ' : 'Entrez vos notes de principale'}</Typography>
                    <Grid container spacing={3}>{renderMatieres('principale')}</Grid>
                </Grid>
                {
                    sessionRadio === 'controle' &&
                    <Grid item xs={12}>
                        <Typography component="h3" variant="h3" display="block" color="secondary">Entrez vos notes de controle</Typography>
                        <Grid container spacing={3}>{renderMatieres('controle')}</Grid>
                    </Grid>
                }
            </Grid>
            <input type="submit" value="submit"/>
        </form>
    );
}

