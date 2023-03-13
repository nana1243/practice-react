import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <p>가장 먼저 보여지는 페이지 입니다.</p>
            <Link to="/about">소개</Link>
            <ul>
                <li>
                    <Link to="/profiles/minjun">minjun 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong의 프로필</Link>
                </li>
            </ul>

        </div>
    )
}

export default Home;