import React, { useState } from 'react'

const QnA = ({question, answer}) => {

    const [que, setAns] = useState(false);

    const toggleQnA = () => {
        setAns(!que);
        document.querySelector("body").classList.toggle("body-overflow-visible");
    };

    return (
        <div className='qna'>
            <div
                className={`question ${que ? "is-active" : ""
            }`}
                onClick={toggleQnA}
            >
                {question}
            </div>
            <div className={`answer ${que ? "overlay" : ""}`}>
                {answer}
            </div>
        </div>
    )
}

export default QnA;


