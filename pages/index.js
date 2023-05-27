import { useState } from 'react';
import Link from 'next/link';

function Count() {
    const [count, setCount] = useState(1);

    function addCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>Add count</button>
        </div>
    )
}

function Home() {
    return (
        <div>
            <Link href="/about">About</Link>
            <h1>Test a count in React.js with Next.js</h1>
            <Count/>
        </div>
    )
}

export default Home;