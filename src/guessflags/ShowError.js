import styled from "styled-components"
import {NavLink, Redirect} from "react-router-dom";
import {Icon} from "@material-ui/core";
import {useEffect, useState} from "react";

const StyledDiv = styled.div`
  background-color: #ff4444;
  padding: 16px;
  margin: 24px 0;
  color: white;
  text-align: center;
  line-height: 2rem;
`;

const StyledBtn = styled.div`
    background-color: #ffffff;
    color: #7D5A5A;
    padding: 12px 0;
    border: 0;
    border-radius: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 2%;
    width: 96%;
    text-align: center;
`;

function ShowError() {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        const id = setTimeout(function () {
            setRedirect(true);
        }, 5000);
        return () => clearTimeout(id);
    }, []);

    return (
        <>
            <StyledDiv>
                Please choose a continent first.<br />
                Redirected after 5 secondes.
            </StyledDiv>
            <NavLink to='/guessflags' exact style={{textDecoration: 'none'}}>
                <StyledBtn><Icon>arrow_back_ios</Icon>BACK NOW</StyledBtn>
            </NavLink>
            {
                redirect &&
                <Redirect to='/guessflags'/>
            }

        </>
    );
}

export default ShowError;