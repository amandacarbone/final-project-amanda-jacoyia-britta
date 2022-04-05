import { useState } from "react";

export function SearchForm(props: { onSubmit: (searchItem: string) => void }) {
    
    const [input, setInput] = useState('');

    return (
        <div className="searchForm">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => console.log(props.onSubmit(input))}>Search</button>
        </div>
    );

}