import PanelItem from "./PanelItem";

function Panel(props) {
    function renderPanel() {

        return props.panelItems.map((item) => {
            let bgColor = '';
            let bgGradient = '';
            switch (item.id) {
                case 'lwc-01':
                case 'lwc-02':
                case 'lwc-03':
                case 'lwc-04':
                case 'lwc-05':
                case 'lwc-06':
                    bgColor =  '#39bdff';
                    bgGradient = 'linear-gradient(90deg, #39bdff 0%, #1777ff 100%)';
                    break;
                case 'lwc-07':
                case 'lwc-08':
                case 'lwc-09':
                case 'lwc-10':
                case 'lwc-11':
                case 'lwc-12':
                    bgColor =  '#1873fc';
                    bgGradient = 'linear-gradient(90deg, #1873fc 0%, #0016ff 100%)';
                    break;
                case 'rwc-01':
                case 'rwc-02':
                case 'rwc-03':
                case 'rwc-04':
                case 'rwc-05':
                case 'rwc-06':
                    bgColor =  '#edbb8f';
                    bgGradient = 'linear-gradient(90deg, #e7bb94 0%, #e9b889 100%)';
                    break;
                case 'rwc-07':
                case 'rwc-08':
                case 'rwc-09':
                case 'rwc-10':
                    bgColor =  '#be0703';
                    bgGradient = 'linear-gradient(90deg, #be0703 0%, #ba0e0b 100%)';
                    break;
                case 'rwc-11':
                case 'rwc-12':
                    bgColor =  '#b68218';
                    bgGradient = 'linear-gradient(90deg, #b68218 0%, #e5d956 100%)';
                    break;
                default:
                    bgColor =  '#39bdff';
                    bgGradient = 'linear-gradient(90deg, #39bdff 0%, #1777ff 100%)';
            }
            return (<PanelItem key={item.id} left={props.left} bgColor={bgColor} bgGradient={bgGradient}>
                {(item.id === 'lwc-02' || item.id === 'lwc-06' || item.id === 'lwc-10' || item.id === 'lwc-12') ? item.value : ` ${item.value} د `}
            </PanelItem>)
        });
    }

    return (
        renderPanel()
    );
}

export default Panel;