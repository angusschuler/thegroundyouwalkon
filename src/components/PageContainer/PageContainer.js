import { Box, makeStyles } from "@material-ui/core";
import React from 'react';
import { viewport } from "../../helper/Viewport";

const useStyles = makeStyles({
    root: props => ({
        position: "relative",
        // width: "1337px",
        // height: "751px",
        // width: "1920px",
        // height: "1078px",
        width: `${props.width}px`,
        height: `${props.height}px`,
        margin: "auto",
        left: "0",
        right: "0",
        marginTop: "48px"


        // margin-left: 68px;
        // position: fixed;
        // margin-top: 48px;
        // width: 100%;
        // height: 100%;
        // left: 0;
        // top: 0;
        // overflow: scroll;
    })
})

function PageContainer(props) {
    const classes = useStyles(props.size)
    return (
        <Box className={classes.root} >
            {props.children}
        </Box >
    );
}

export default PageContainer;