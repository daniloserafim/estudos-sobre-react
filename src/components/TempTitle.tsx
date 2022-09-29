import { useEffect, useState } from "react";

export function TempTitle() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = "Title Counter: " + counter.toString();

        return () => {
            document.title = 'Time is over';
        }
    })

    return (
        <div>
            <h1>Title Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
        </div>
    )
}