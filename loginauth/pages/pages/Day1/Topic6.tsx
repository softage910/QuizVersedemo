import '../Day1Module.css';

export default function SixthTopic() {
    return (
        <>
        <h2 className="h2">Our data collection outline for model training (data categories and model training)</h2>
            <p>
                Developing effective AI models requires a diverse and structured dataset that covers various aspects of human-computer interaction. This inventory outlines the different types of data we collected to train AI models in tasks such as typing, clicking, and executing complex instructions. </p> <br /> <p> We have created a total of X (add number) prompts across these categories, with Y (add number) in typing, Z (add number) in clicking, A (add number) in atomic actions, B (add number) in low complexity tasks, C (add number) in task completion, D (add number) in unsupervised data, and E (add number) in specialized training.
            </p>
            <table className='Day1Table'>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Dataset</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Typing</td>
                        <td>Monkeytype</td>
                        <td>Teaches keyboard input patterns &amp; typing speed optimization</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Typing data</td>
                        <td>Maps key-value pairs for contextual input recognition</td>
                    </tr>
                    <tr>
                        <td>Clicking</td>
                        <td>Mouse accuracy</td>
                        <td>Trains precision in target selection &amp; click accuracy</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hard clicks</td>
                        <td>Teaches click execution on UI elements</td>
                    </tr>
                    <tr>
                        <td>Atomic actions</td>
                        <td>Single-step</td>
                        <td>Teaches isolated click/type actions linked to simple instructions</td>
                    </tr>
                    <tr>
                        <td>Low complexity tasks</td>
                        <td>Multi-step</td>
                        <td>Trains sequential execution of 1-3 steps (e.g., click → type → submit)</td>
                    </tr>
                    <tr>
                        <td>Task completion</td>
                        <td>Small tasks</td>
                        <td>Provides end-to-end workflows for basic instruction following</td>
                    </tr>
                    <tr>
                        <td>Unsupervised data</td>
                        <td>Raw click/type logs</td>
                        <td>Captures organic user behavior patterns</td>
                    </tr>
                    <tr>
                        <td>Specialized training</td>
                        <td>Supervised actions</td>
                        <td>Teaches complex UI workflows through human-demonstrated task sequences</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}