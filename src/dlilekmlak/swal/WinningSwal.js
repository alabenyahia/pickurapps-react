import styled from "styled-components";
import {Icon} from "@material-ui/core";
import {useState} from "react";
import {motion} from "framer-motion";


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
  color: #FAEBD7;
  direction: rtl;

  &::placeholder {
    color: #FAEBD7;
  }

  &:-ms-input-placeholder {
    color: #FAEBD7;
  }

  &::-ms-input-placeholder {
    color: #FAEBD7;
  }


`;


function WinningSwal(props) {
    const [value, setValue] = useState('');
    const [alreadySaved, setAlreadySet] = useState(false);
    const [msg, setMsg] = useState({text: "", isError: false});
    const [animate, setAnimate] = useState(false);

    // handle save winnings btn click
    const handleClick = (e) => {
        e.preventDefault();

        // show error if player already saved or has not entered his name
        if (value.length <= 0) {
            setMsg({text: "أكتب إسمك !", isError: true});
            setAnimate(true);
        } else if (alreadySaved) {
            setMsg({text: "ديجا سجلت !", isError: true});
            setAnimate(true);
        } else {
            let jsonObj = {
                name: value,
                amount: props.winnings,
                date: (new Date()).toString()
            };
            localStorage.setItem('dlilekmlak-' + ((Date.parse((new Date()).toString())).toString()), JSON.stringify(jsonObj));
            setMsg({text: "تم التسجيل !", isError: false});
            setAlreadySet(true);
        }
    }

    return (
        <StyledDiv>
            <h3 style={{margin: '12px 0', direction: 'rtl', fontSize: '2rem'}}> ربحت : {props.winnings}</h3>
            {
                props.wasInUrBox && (
                    <p style={{margin: '8px 0', direction: 'rtl', color: '#FAEBD7'}}> كان في صندوقك
                        : {props.wasInUrBox} </p>)
            }
            <form style={{display: 'flex'}} autoComplete="off">
                <StyledInput onChange={(e) => setValue(e.target.value)} value={value} placeholder="إكتب إسمك"/>

                <motion.button
                    animate={(value.length <= 0 || alreadySaved) && animate ? {translateX: [0, -10, 10, -10, 10, -10, 10, -10, 8, -8, 0]} : {}}
                    className='swal-buttons-style swal-confirmbutton-style'
                    style={{display: 'flex', alignItems: 'center'}}
                    onAnimationComplete={()=>setAnimate(false)}
                    onClick={(e) => handleClick(e)}>سجلني<Icon style={{marginLeft: '8px'}}>send</Icon></motion.button>
            </form>
            {
                msg.text && <p style={{
                    backgroundColor: msg.isError ? '#ff4444' : '#00C851'
                    , color: '#FAEBD7', padding: '8px', direction: 'rtl',
                }}>{msg.text}</p>
            }
            <p style={{margin: '8px 0', direction: 'rtl', color: '#FAEBD7'}}>تحب تعاود تلعب ؟</p>
        </StyledDiv>
    );
}

export default WinningSwal;