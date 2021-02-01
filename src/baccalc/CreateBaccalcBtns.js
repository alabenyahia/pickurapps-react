import sectionData from "./sectionData";
import {Button, Grid, Icon} from "@material-ui/core";
import {NavLink} from "react-router-dom";

export default function CreateBaccalcBtns() {
    const btns = [];
    for (const prop in sectionData) {
        let btn = (
            <Grid item xs={12} sm={6} md={4} lg={3} key={prop}>
                <Button fullWidth variant="contained" color='secondary'
                        startIcon={<Icon>{sectionData[prop].iconName}</Icon>} style={{padding:'24px 0'}}
                        component={NavLink} to={sectionData[prop].to} activeStyle={{color: '#ff4081'}}>
                    {sectionData[prop].sectionName}
                </Button>
            </Grid>
        );
        btns.push(btn);
    }
    return btns;
}