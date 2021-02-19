import {Grid} from "@material-ui/core";
import styled from 'styled-components';
import bgImg from './imgs/bg.jpg';
import {useEffect, useLayoutEffect, useState} from "react";
import NotAvailableError from "./NotAvailableError";
import {motion} from "framer-motion";
import {containerVariants} from "../commons/routingAnimation";

const StyledGridContainer = styled(motion.div)`
  flex: 1!important;
  justify-content: center;
  flex-direction: column;
  display: flex!important;
  align-items: center;
`;

const StyledGridItem = styled.div`
  max-width: 1000px;
  max-height: 550px;
  width: 100%;
  margin: 16px 0;
  background-image: url(${bgImg});
  flex: 1;
  border-radius: 1rem;
  color: #ffffff;
  overflow: auto;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  font-family: "Lalezar", sans-serif;
  display: flex;
`;

function MainBoard(props) {
    const [pageDimens, setPageDimens] = useState([window.innerWidth, window.innerHeight]);
    useLayoutEffect(()=> {
        window.addEventListener('resize', ()=> {
            setPageDimens([window.innerWidth, window.innerHeight]);
        })
    }, [])

    return (
        <StyledGridContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <StyledGridItem>
                {
                    (pageDimens[0] < 850 || pageDimens[1] < 500) ?
                        <NotAvailableError /> : props.children
                }
            </StyledGridItem>
        </StyledGridContainer>
    );
}

export default MainBoard;