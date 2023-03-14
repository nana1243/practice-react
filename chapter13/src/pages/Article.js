import {useParams} from "react-router-dom";

const Article = () => {
    const {id} = useParams();

    return(
        <div>
            <h1>{id} 님의 게시글입니다.</h1>
        </div>
    )

}
export default Article;