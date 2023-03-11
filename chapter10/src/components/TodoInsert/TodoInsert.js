import {MdAdd} from "react-icons/md";
import './TodoInsert.scss'
import {useCallback, useState} from "react";


const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    //mount 될때만 실행됩니다.
    const onChange = useCallback(e => {
        console.log(`this is running onChange!`)
        setValue(e.target.value)
    }, []);

    const onSubmit = useCallback(e=> {
        onInsert(value);
        setValue('');

        // submit 이벤트는 브라우저에서 새로고침을 발생시킴.
        // 이를 방지하고자 위해 이함수를 호출 합니다.
        e.preventDefault()
    },[onInsert,value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit"><MdAdd/></button>
        </form>
    )
}

export default TodoInsert;