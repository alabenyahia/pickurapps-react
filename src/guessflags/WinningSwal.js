import styled from "styled-components";
import yellowLikeImg from "./imgs/like-yellow.svg";
import coinsImg from "./imgs/coin-colored.svg"

const StyledDiv = styled.div`
  color: #ffffff;
  text-align: center;
`;


function WinningSwal(props) {
    let div = (
        <StyledDiv>
            <img style={{maxWidth: '100%'}} src={yellowLikeImg} alt="Yellow like"/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem'}}><img width={28} height={28} src={coinsImg} alt="coins"/><span style={{marginLeft: '8px'}}>+{props.num}</span></div>
        </StyledDiv>
    );
    function renderSwal(){
        if (props.type === 'next_flag') {
            return div;
        } else {
            return div;
        }
    }

    return (
        renderSwal()
    );
}

export default WinningSwal;