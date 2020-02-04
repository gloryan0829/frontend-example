import React, {useState} from 'react'

const InputSample = (props) => {

    const [text, setText] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        setText(e.target.value)
    };

    const initText = () => {
        setText('')
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={initText}>초기화</button>
            <div>
                <b>값 : </b>
                {text}
            </div>
        </div>
    );
};

export default InputSample
