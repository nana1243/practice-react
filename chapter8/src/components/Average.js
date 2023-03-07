import {useCallback, useMemo, useState} from "react";


const getAverage = numbers => {
    console.log('average 계싼중');
    if(numbers.length ===0){
        return 0
    }
    const sum = numbers.reduce((prev,pos) => prev + pos);
    return sum / numbers.length
}

const Average = () => {
    const [list,setList] = useState([]);
    const [number, setNumber] = useState('')

    const onChange = useCallback(e=> {
        setNumber(e.target.value)
    },[])
    const onInsert = useCallback(e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number,list])
    const getAvgV2 = useMemo(() => getAverage(list),[list])
    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>button</button>
            <ul>
                {list.map((value,index) => {
                    <li key={index}> {value}</li>
                })}
            </ul>
            <div>
                <h1>평균값 : {getAvgV2}</h1>
            </div>
        </div>
    )
}

export default Average;