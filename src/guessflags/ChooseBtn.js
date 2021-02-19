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

  &:hover {
    background-color: #6E4D4D;
  }
`;

class ChooseBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: true, animate: false};
    }


    static getDerivedStateFromProps(props) {
        if (props.resetVisibility) {
            props.setResetVisibility(false);
            return {isVisible: true};
        }
    }

    handleAnimationComplete() {
        if (this.state.animate) {
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