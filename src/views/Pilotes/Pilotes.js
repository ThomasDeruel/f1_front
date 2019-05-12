import React from "react";

class Pilotes extends React.Component {
    render(){
        return(
            <div>pilotes: {this.match.params.id}</div>
        )
    }
}

export default Pilotes;