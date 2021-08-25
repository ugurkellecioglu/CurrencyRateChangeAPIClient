import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
const Overlay = () => {

    return (<div className="overlayWrapper" style={{ width: '100%', height: '100vh' }}>
        <LoopCircleLoading />
    </div>)
};
export default Overlay;