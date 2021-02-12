import PanelItem from "./PanelItem";

function Panel(props) {
    function renderPanel() {
        return props.panelItems.map((item, index) => <PanelItem key={index} left={props.left}>{item.value}</PanelItem>);
    }

    return (
        renderPanel()
    );
}

export default Panel;