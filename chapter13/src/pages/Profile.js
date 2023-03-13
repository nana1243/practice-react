import {useParams} from "react-router-dom";

const data = {
    minjun: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전소설 홍길동전의 주인공'
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필!!!</h1>
            <h2>{profile.name}</h2>
            <h2>{profile.description}</h2>
        </div>
    )
}

export default Profile;