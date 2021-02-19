import styled from "styled-components";
import {motion} from "framer-motion";
import {containerVariants} from "./routingAnimation";


const StyledMain = styled(motion.main)`
  width: 70%;
  margin: 24px auto;

  @media screen and (max-width: 960px) {
    width: calc(100% - 24px);
    margin: 16px auto;
  }
`;


function StyledContainer(props) {

    return (
        <StyledMain
            variants={containerVariants}
            initial="out"
            animate="in"
            exit="out">
            {props.children}
        </StyledMain>
    );
}

export default StyledContainer;