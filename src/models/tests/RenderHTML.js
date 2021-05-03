import React from "react";

const RenderHTML = (props) => {
    return (<span id={props.id} style={{"max-width": "100%"}} dangerouslySetInnerHTML={{__html:props.HTML}}></span>)
}

export default RenderHTML;