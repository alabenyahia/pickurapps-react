import styled from "styled-components"
import MainBoard from "./MainBoard";
import {Icon} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  width: 100%;
  align-items: center;
`;


const StyledTable = styled.table`
  flex: 1;
  direction: rtl;
  text-align: center;
  width: 100%;
  margin: 24px 0;
  border-radius: 6px;
  background-color: rgba(91, 4, 253, 0.25);
`;


const StyledThead = styled.thead`
  background-color: rgba(101, 39, 243, 0.4);
`;

const StyledTbody = styled.tbody`
  text-align: center;
  padding: 16px 0;

`;

const StyledTh = styled.th`
  padding: 8px 16px;
`;

const StyledTd = styled.td`
  padding: 8px 16px;
`;


const StyledBtn = styled.button`
  border: none;
  border-radius: 999px;
  color: #ffffff;
  background: #5713f1;
  background: linear-gradient(90deg, #5713f1 0%, #455ed5 35%, #48dee6 100%);
  padding: 1rem 2rem;
  margin: 1rem;
  cursor: pointer;
  font-size: 2rem;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  width: fit-content;
`;

function ShowWinnings(props) {
    const history = useHistory()

    function formatDate(date) {
        const dt = new Date(date);
        let dateStr = dt.getDate().toString();
        switch (dt.getMonth()) {
            case 0 :
                dateStr += ' جانفي ';
                break;
            case 1 :
                dateStr += ' فيفري ';
                break;
            case 2 :
                dateStr += ' مارس ';
                break;
            case 3 :
                dateStr += ' افريل ';
                break;
            case 4 :
                dateStr += ' ماي ';
                break;
            case 5 :
                dateStr += ' جوان ';
                break;
            case 6 :
                dateStr += ' جويلية ';
                break;
            case 7 :
                dateStr += ' اوت ';
                break;
            case 8 :
                dateStr += ' سبتمبر ';
                break;
            case 9 :
                dateStr += ' اكتوبر ';
                break;
            case 10 :
                dateStr += ' نوفمبر ';
                break;
            case 11 :
                dateStr += ' ديسمبر ';
                break;
        }

        dateStr += dt.getFullYear().toString() + " - ";
        dateStr += (dt.getHours()<10 ? `0${dt.getHours()}` : dt.getHours()) + ' : ' ;
        dateStr += (dt.getMinutes()<10 ? `0${dt.getMinutes()}` : dt.getMinutes()) + ' : ' ;
        dateStr += dt.getSeconds()<10 ? `0${dt.getSeconds()}` : dt.getSeconds() ;
        return dateStr;
    }

    function renderTable() {
        let winningsArr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let appName = key.substr(0, 11);
                if (appName === 'dlilekmlak-') {
                    let jsonObj = JSON.parse(localStorage.getItem(key));
                    jsonObj.id = parseInt(key.substr(11));
                    winningsArr.push(jsonObj);
                }
            }
        }
        if (winningsArr.length > 0) {
            return winningsArr.map((item) => (
                    <tr key={item.id}>
                        <StyledTd>{item.name}</StyledTd>
                        <StyledTd>{item.amount}</StyledTd>
                        <StyledTd>{formatDate(item.date)}</StyledTd>
                    </tr>
                )
            );
        } else {
            return <tr><StyledTd colSpan={3}>لا يوجد رابحيين ...</StyledTd></tr>
        }

    }

    const handleClick = () => {
        history.push('/dlilekmlak/game');
    }

    return (
        <MainBoard>
            <StyledDiv>
                <StyledTable>
                    <StyledThead>
                        <tr>
                            <StyledTh>الإسم</StyledTh>
                            <StyledTh>المبلغ</StyledTh>
                            <StyledTh>التاريخ</StyledTh>
                        </tr>
                    </StyledThead>

                    <StyledTbody>
                        {renderTable()}
                    </StyledTbody>
                </StyledTable>
                <StyledBtn onClick={() => handleClick()}> أبدأ العب<Icon style={{marginRight: '8px'}}>play_circle</Icon></StyledBtn>
            </StyledDiv>
        </MainBoard>
    );
}

export default ShowWinnings;