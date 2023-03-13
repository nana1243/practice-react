import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail : detail === 'true' ? 'true 입니다' : 'false 입니다'})
    }
    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1
        setSearchParams({mode : nextMode, detail})
    }

    return (
        <div>
            <h1>About</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle Detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    )
}
export default About;