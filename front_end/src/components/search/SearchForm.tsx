import { useState } from "react";

export function SearchForm(props: { onSubmit: (searchItem: string) => void }) {
    
    const [input, setInput] = useState('');

    function submission() {
        props.onSubmit(input);
        console.log('form working');
    }

    return (
        <div className="searchForm">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={submission}>Search</button>
        </div>
    );

}