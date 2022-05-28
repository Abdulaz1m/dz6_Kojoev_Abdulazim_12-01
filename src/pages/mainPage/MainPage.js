import React,{useState} from "react";
import News from "../../components/news/News";

function MainPage () {

    const [state, setState] = useState(false)

    function openNews (e) {
        e.preventDefault()
        setState(!state)
    }

    return (
        <>
            {state === true ? <News/> : ""}
            <button onClick={openNews}>Открыть/Закрыть News</button>
        </>
    )
}

export default MainPage;