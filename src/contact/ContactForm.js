import styled from "styled-components";
import {Button, Grid, Icon, IconButton, Snackbar, SnackbarContent, TextField, Typography} from "@material-ui/core";
import {useState} from "react";
import CloseIcon from "@material-ui/icons/Close";

const StyledDiv = styled.div`
  width: 60%;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const StyledBtn = styled(Button)`

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    // valide form inputs
    const validateForm = () => {
        if (name.length<3) {
            setErrorMessage('Name must be at least 3 characters');
            return false;
        }
        let mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(!email.match(mailformat)) {
            setErrorMessage('Invalid Email Address');
            return false;
        }
        if (object.length<3) {
            setErrorMessage('Object must be at least 3 characters');
            return false;
        }
        if (message.length<5) {
            setErrorMessage('Message must be at least 5 characters');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    // fire when send button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowSuccessToast(true);
            setName('');
            setEmail('');
            setObject('');
            setMessage('');
        } else {
            setShowErrorToast(true);
        }


    }

    // fire when a text input value changes
    const handleChange = (e) => {
        switch (e.target.id) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'object':
                setObject(e.target.value);
                break;
            case 'message':
                setMessage(e.target.value);
                break;
        }
    }

    return (
        <StyledDiv>
            <Typography variant="h3" component="h3" color='secondary' style={{margin: '16px 0'}}>
                Let's get in touch 👇
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth value={name} onChange={(e) => handleChange(e)} id="name" label="Your Name"
                                   variant="outlined"/>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth value={email} onChange={(e) => handleChange(e)} id="email"
                                   label="Your Email Address" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth value={object} onChange={(e) => handleChange(e)} id="object" label="Object"
                                   variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth value={message} onChange={(e) => handleChange(e)} multiline rows={7}
                                   id="message" label="Message" variant="outlined"/>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledBtn variant="contained" color="secondary" type='submit'
                                   endIcon={<Icon>send</Icon>}>Send</StyledBtn>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                open={showSuccessToast}
                autoHideDuration={3000}
                onClose={(e, r) => r === 'clickaway' ? false : setShowSuccessToast(false)}
            >
                <SnackbarContent
                    message={'Thank you! we have received your message.'}
                    style={{backgroundColor: '#00C851'}}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit"
                                    onClick={(e, r) => r === 'clickaway' ? false : setShowSuccessToast(false)}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    }/>
            </Snackbar>

            <Snackbar
                open={showErrorToast}
                autoHideDuration={3000}
                onClose={(e, r) => r === 'clickaway' ? false : setShowErrorToast(false)}
            >
                <SnackbarContent
                    message={errorMessage}
                    style={{backgroundColor: '#ff4444'}}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit"
                                    onClick={(e, r) => r === 'clickaway' ? false : setShowErrorToast(false)}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    }/>
            </Snackbar>
        </StyledDiv>
    );
}

export default ContactForm;