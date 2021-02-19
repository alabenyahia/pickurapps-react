import MainBoard from "./MainBoard";
import styled from "styled-components";
import {Icon} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const StyledBtn = styled.button`
    border: none;
    border-radius: 999px;
    color: #ffffff;
    background: ${props => props.play ? '#5713f1' : '#d4263b'};
    background: ${props => props.play ? 
    'linear-gradient(90deg, #5713f1 0%, #455ed5 35%, #48dee6 100%)' :
    'linear-gradient(90deg, #d4263b 0%, #e9507f 38%, #f9b3a4 100%)'};
    padding: 1rem 2rem;
    margin: 0.5rem;
    cursor: pointer;
    font-size: 2rem;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
`;





function GameMenu(props) {
    const history = useHistory();

    const handleClick = path => {
        history.push('/dlilekmlak/'+path);
    }
    return (
        <>
            <div style={{direction: 'rtl', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <StyledBtn onClick={()=>handleClick('game')} play={true}> أبدأ العب<Icon style={{marginRight: '8px'}}>play_circle</Icon></StyledBtn>
                <StyledBtn onClick={()=>handleClick('wins')}  play={false}> قائمة الرابحين<Icon style={{marginRight: '8px'}}>list_alt</Icon></StyledBtn>
            </div>
        </>
    );
}

export default GameMenu;