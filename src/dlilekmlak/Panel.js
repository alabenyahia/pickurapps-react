import PanelItem from "./PanelItem";

function Panel(props) {
    function renderPanel() {
        return props.panelItems.map((item) => <PanelItem key={item.id} left={props.left}>
            {(item.id === 'lwc-02' || item.id === 'lwc-06' || item.id === 'lwc-10' || item.id === 'lwc-12') ? item.value : ` ${item.value} د `}
        </PanelItem>);
    }

    return (
        renderPanel()
    );
}

export default Panel;