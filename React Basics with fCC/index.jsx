import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<>
    <h1>Hello World</h1>
    <h2>Reasons to learn React</h2>
    <ul>
        <li>Fast</li>
        <li>Easy</li>
        <li>Fun</li>
    </ul>
</>);