import React from 'react';
import './loader.scss';
class Loading extends React.Component {
    render() {
        return (
            <>
                <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
            </>
        )
    }
}

export default Loading;