import styled from "styled-components";
import React from "react";
import {motion} from "framer-motion";

const StyledBtn = styled(motion.div)`
  flex: 1;
  margin: 0 8px 8px 8px;
  padding: 12px;
  background-color: #7D5A5A;
  color: white;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    background-color: #6E4D4D;
  }
  
  @media screen and (max-width: 600px) {
    margin: 0 6px 6px 6px;
    padding: 9px;
  }

  @media screen and (max-width: 370px) {
    margin: 0 4px 4px 4px;
    padding: 7px;
  }
`;

class ChooseBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: true, animate: false};
    }

    // reset visibility before element renders if resetVisibility prop passed
    static getDerivedStateFromProps(props) {
        if (props.resetVisibility) {
            props.setResetVisibility(false);
            return {isVisible: true};
        } else return null;
    }

    // run when button animation complete
    handleAnimationComplete() {
        if (this.state.animate) {
            // set button to invisible & call btn handler from parent
            this.setState({isVisible: false, animate: false});
            this.props.handleChooseBtnClick(this.props.char);
        }
    }

    render() {
        return (
            <StyledBtn transition={{duration: 0.2}}
                       animate={this.state.animate ? {scale: 0} : {}}
                       style={{visibility: this.state.isVisible ? 'visible' : 'hidden'}}
                       onClick={() => this.setState({animate: true})}
                       onAnimationComplete={() => this.handleAnimationComplete()}>{this.props.char}</StyledBtn>

        );
    }
}

export default ChooseBtn;