import React from "react";
import './Main.scss';
import ReactJson from 'react-json-view';
class Main extends React.Component {
    render() {
        console.log(this.props);
        return (
            <>
                <section className='main'>
                   <ReactJson src={this.props}/>
                </section>
            </>
        )
    }
}

export default Main;

