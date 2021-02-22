import React from 'react'


function TestButton(props) {
    const { className, border, backgroundColor, borderRadius, btnName} = props;
    return (
        <>
            <button className={className} style={{border: border, borderRadius: borderRadius, backgroundColor: backgroundColor}} >{btnName}</button>
        </>
    )
}

export default TestButton
