import styled from "styled-components";
import React from "react";

const StyledBtn = styled.div`
    flex: 1;
    margin:0 8px 8px 8px;
    padding: 12px;
    background-color: #7D5A5A;
    color: white;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
`;

class ChooseBtn extends React.Component{
    constructor(props) {
        super(props);
        this.state={isVisible:true};
    }


    static getDerivedStateFromProps(props){
        if(props.resetVisibility) {
            props.setResetVisibility(false);
            return {isVisible: true};
        }
    }

     handleClick() {
        this.props.handleChooseBtnClick(this.props.char);
        this.setState({isVisible: false});
    }

    render(){
        return (
            <StyledBtn style={{visibility: this.state.isVisible? 'visible' : 'hidden'}} onClick={() => this.handleClick()}>{this.props.char}</StyledBtn>
        );
    }
}

export default ChooseBtn;