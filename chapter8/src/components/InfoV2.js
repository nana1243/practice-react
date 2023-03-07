import {useReducer, useState} from "react";


function reducer(state, action) {
    return{
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })
    const {name, nickname} = state;

    const onChange = e => {
        dispatch(e.target)
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                name="name"
                placeholder="name을 입력하세요"
                onChange={onChange}
            />
            <input
                type="text"
                name="nickname"
                value={nickname}
                placeholder="nickName 입력하세요"
                onChange={onChange}
            />
            <h1> Name : {name} </h1>
            <h1> NickName : {nickname}</h1>

        </div>
    )
}

export default Info;