import styled from "styled-components";
import {Icon} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {motion} from "framer-motion";
import {useState} from "react";


const StyledCard = styled(motion.div)`
  background-color: #7D5A5A;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  width: 100%;
  color: white;
  text-align: center;

  &:hover {
    background-color: #6E4D4D;
  }


`;

const StyledCardImgContainer = styled.div`
  font-size: 60px;
  height: 60px;
  padding: 24px 0;
`;


const StyledCardText = styled.div`
  background-color: #6E4D4D;
  padding: 12px 4px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;


  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.65rem;
  }
  user-select: none;

`;


function StageCard(props) {
    const history = useHistory();
    const [animate, setAnimate] = useState(false)

    // fire when a continent card is clicked
    const handleClick = () => {
        if (props.isLocked) setAnimate(true);
        else history.push(props.to);
        props.handleContCardClick(props.isLocked)
    }

    return (
        <StyledCard animate={animate ? {translateX: [0, -10, 10, -10, 10, -10, 10, -10, 8, -8, 0]} : {}}
                    onClick={() => handleClick()}
                    onAnimationComplete={() => setAnimate(false)}>
            <StyledCardImgContainer>
                <Icon fontSize='inherit' color='inherit'>{props.isLocked ? 'lock' : 'lock_open'}</Icon>
            </StyledCardImgContainer>
            <StyledCardText>{props.name}</StyledCardText>
        </StyledCard>
    );
}

export default StageCard;