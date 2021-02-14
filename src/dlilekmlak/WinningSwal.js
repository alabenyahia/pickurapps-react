import styled from "styled-components";
import {Icon, TextField} from "@material-ui/core";
import {useState} from "react";

const StyledDiv = styled.div`
  color: #ffffff;
  text-align: center;
`;

const StyledBtn = styled.button`
  color: #ffffff;
  background-color: #00C851;
  display: flex;
  align-items: center;
  border: 0;
  padding: 8px 16px;
  margin-left: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    background-color: rgb(0, 200, 81);
  }
`;

function WinningSwal(props) {
    const [value, setValue] = useState('');
    const [alreadySaved, setAlreadySet] = useState(false);
    const [msg, setMsg] = useState({text:"", isError: false});

    const handleClick = (e) => {
        e.preventDefault();
        if (value.length<=0) {
            setMsg({text: "أكتب إسمك !", isError: true});
        } else if (alreadySaved) {
            setMsg({text: "ديجا سجلت !", isError: true});
        } else {
            let jsonObj = {
                name: value,
                amount: props.winnings,
                date: (new Date()).toString()
            };
            localStorage.setItem('dlilekmlak-'+((Date.parse((new Date()).toString())).toString()), JSON.stringify(jsonObj));
            setMsg({text: "تم التسجيل !", isError: false});
            setAlreadySet(true);
        }
    }

    return (
        <StyledDiv>
            <h3 style={{margin: '16px 0'}}> {props.winnings}ربحت : </h3>
            {
                props.wasInUrBox && (<p style={{margin: '8px 0'}}> كان في صندوقك : {props.wasInUrBox} </p>)
            }
            <form  style={{display: 'flex'}} autoComplete="off">
                <TextField color="primary" onChange={(e)=>setValue(e.target.value)}
                           value={value} style={{flex: '1'}} label="إكتب إسمك" variant="outlined" />
                <StyledBtn onClick={(e)=>handleClick(e)}>سجلني<Icon style={{marginLeft: '8px'}}>send</Icon></StyledBtn>
            </form>
            {
                msg.text && <p style={{backgroundColor: msg.isError ? '#ff4444' : '#00C851', color:'#ffffff', padding:'8px'}}>{msg.text}</p>
            }
            <p style={{margin: '8px 0'}}>تحب تعاود تلعب ؟</p>
        </StyledDiv>
    );
}

export default WinningSwal;