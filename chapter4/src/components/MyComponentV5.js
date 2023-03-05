import {useState} from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    })
    const {username,message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm);
    }
    const onClick = () => {
        alert(`username : ${username} || message : ${message}`);
        setForm({username: '', message: ''})
    }
    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            <input
                type="text"
                name="username"
                placeholder="사용자명을 입력하세요"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="message 입력하세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>Confirm</button>
        </div>
    )
}

export default EventPractice;