import styled from "styled-components";
import yellowLikeImg from "./imgs/like-yellow.svg";
import coinsImg from "./imgs/coin-colored.svg"

const StyledDiv = styled.div`
  color: #ffffff;
  text-align: center;
`;


function WinningSwal(props) {
    let nextFlag = (
        <StyledDiv>
            <img style={{maxWidth: '100%'}} src={yellowLikeImg} alt="Yellow like"/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem'}}><img
                width={28} height={28} src={coinsImg} alt="coins"/><span style={{marginLeft: '8px'}}>+{props.num}</span>
            </div>
        </StyledDiv>
    );

    let nextCont = (
        <StyledDiv>
            <h3 style={{
                fontWeight: '2rem',
                backgroundColor: '#6E4D4D',
                padding: '1.5rem 0',
                marginBottom: '1.5rem'
            }}>CONGRATS!</h3>
            <p>You have successfully completed this continent.</p>
        </StyledDiv>
    );

    function renderSwal() {
        if (props.type === 'next_flag') {
            return nextFlag;
        } else {
            return nextCont;
        }
    }

    return (
        renderSwal()
    );
}

export default WinningSwal;