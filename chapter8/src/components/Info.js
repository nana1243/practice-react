import {useEffect, useState} from "react";

const Info = () => {
    const [name, setName] = useState();
    const [nickname, setNickname] = useState();
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.')
    //     console.log({
    //         name,
    //         nickname
    //     })
    // })

    // useEffect(() => {
    //     console.log('마운트 될때만 실행합니다');
    //     console.log({
    //         name,
    //         nickname
    //     })
    // }, [])
    //
    // useEffect(() => {
    //     console.log('name값이 바뀔때마다 실행됩니다;');
    //     console.log({
    //         name,
    //         nickname
    //     })
    // }, [name])

    // useEffect(() => {
    //     console.log('업데이트 되기 직전');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanUp!');
    //         console.log(name);
    //     }
    // },[name])

    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        }
    },[])


    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value)
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="name을 입력하세요"
                onChange={onChangeName}
            />
            <input
                type="text"
                value={nickname}
                placeholder="nickName 입력하세요"
                onChange={onChangeNickname}
            />
            <h1> Name : {name}</h1>
            <h1> NickName : {nickname}</h1>

        </div>
    )
}

export default Info;