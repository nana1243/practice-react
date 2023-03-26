import {useContext, useState} from "react";
import ColorContext from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']

const SelectColors = () => {
    const {_,actions} = useContext(ColorContext);

    return (
        <div>
            <h2>색상을 선택하세요</h2>
            <div style={{display: 'flex'}}>
                {colors.map(color => {
                    return <div key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={()=>actions.setColor(color)}
                    />

                })
                }

            </div>
        </div>
    )
}

export default SelectColors;