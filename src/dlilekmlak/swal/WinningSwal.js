import styled from "styled-components";
import {Icon, TextField} from "@material-ui/core";
import {useState} from "react";


const StyledDiv = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Lalezar", sans-serif;
`;

const StyledInput = styled.input`
  flex: 1;
  border: 3px solid #673ab7;
  padding: 8px 16px;
  outline: none;
  border-radius: 6px;
  font-family: inherit;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  direction: rtl;
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &::-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
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
            <h3 style={{margin: '12px 0', direction: 'rtl', fontSize: '2rem'}}> ربحت : {props.winnings}</h3>
            {
                props.wasInUrBox && (<p style={{margin: '8px 0', direction: 'rtl', color: 'rgba(255, 255, 255, 0.8)'}}> كان في صندوقك : {props.wasInUrBox} </p>)
            }
            <form  style={{display: 'flex'}} autoComplete="off">
                <StyledInput  onChange={(e)=>setValue(e.target.value)} value={value} placeholder="إكتب إسمك" />

                <button className='swal-buttons-style swal-confirmbutton-style' style={{display: 'flex', alignItems: 'center'}}
                        onClick={(e)=>handleClick(e)}>سجلني<Icon style={{marginLeft: '8px'}}>send</Icon></button>
            </form>
            {
                msg.text && <p style={{backgroundColor: msg.isError ? '#ff4444' : '#00C851'
                    , color:'rgba(255, 255, 255, 0.8)', padding:'8px', direction: 'rtl',}}>{msg.text}</p>
            }
            <p style={{margin: '8px 0', direction: 'rtl', color: 'rgba(255, 255, 255, 0.65)'}}>تحب تعاود تلعب ؟</p>
        </StyledDiv>
    );
}

export default WinningSwal;