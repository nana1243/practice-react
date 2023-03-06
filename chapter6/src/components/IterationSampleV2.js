import {useState} from "react";

const IterationSample = () => {
    const [names,setNames] = useState([
        {id:1 ,text: '눈사람1'},
        {id:2 ,text: '눈사람2'},
        {id:3 ,text: '눈사람3'},
        {id:4 ,text: '눈사람4'},
    ])
    const [inputText, setInputText] = useState('');
    const [nextId , setNextId] = useState(5);
    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        })
        setNextId(nextId +1);
        setNames(nextNames);
        setInputText('');
    }
    return (
        <>
            <input
                value = {inputText}
                onChange={onChange}
            />
            <button onClick={onClick}>추가</button>

            <ul>{namesList}</ul>
        </>
    )

}

export default IterationSample;