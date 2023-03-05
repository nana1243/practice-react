import {useState} from "react";

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(`${username} :  ${message} 입력하였습니다.`);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e => {
        if (e.key === 'Enter') {
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
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="message 입력하세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>Confirm</button>
        </div>
    )
}

export default EventPractice;