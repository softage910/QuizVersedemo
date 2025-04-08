import '../Day1Module.css';

export default function SecondTopic() {
    return (
        <>
            <h2 className="h2">Understanding Prompts for Computer Use Agents</h2>
            <h2 className="h2"><strong>Definition and Purpose</strong></h2>
            <p className='p'>
                Prompts designed for computer use agents are the digital equivalent of clear, concise instructions
                given to a highly skilled personal assistant. These prompts serve as the bridge between human intent
                and AI execution, enabling seamless automation of tasks across various digital platforms.
            </p><br />
            <h3 className="h3">Key aspects of computer use agent prompts:</h3>
            <ol className="ol">
                <li><strong>Task-oriented:</strong>
                    <ul className="ul">
                        <li>Each prompt is focused on accomplishing a specific, actionable task.</li>
                    </ul>
                </li>
                <li><strong>Precise language:</strong>
                    <ul className="ul">
                        <li>Uses clear, direct language and action verbs (e.g., “schedule, “send,
                            “organize) to avoid misinterpretation.</li>

                    </ul>
                </li>
                <li><strong>Context-aware</strong>
                    <ul className="ul">
                        <li>Includes the necessary environmental or situational details (tools, timelines,
                            platforms).</li>

                    </ul>
                </li>
                <li><strong>Parameter-driven</strong>
                    <ul className="ul">
                        <li>
                            Specifies required inputs, constraints, or conditions for task execution (time
                            limits, formats, priorities).
                        </li>

                    </ul>
                </li>
                <li><strong>Platform-specific</strong>
                    <ul className="ul">
                        <li>Tailored to work within the confines and capabilities of particular software
                            systems or tools.</li>

                    </ul>
                </li>
            </ol>
            <br />

            <p className='p'>
                <strong>Basic Prompt Structure</strong><br /><br />
                <ul className="ul">
                    <li>[Action Verb] + [Task Object] + [Location/Platform] + [Timing] + [Additional Parameters]</li>

                </ul>

            </p>

            <br />

            <table className='Day1Table'>
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Intention</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Action</td>
                        <td>Clearly define the task to be performed </td>
                        <td>&quot;Send a payment reminder email...&quot;</td>
                    </tr>
                    <tr>
                        <td>Context</td>
                        <td>Provide relevant environmental or
                        situational information</td>
                        <td>&quot;...using HubSpot templates, targeting
                        overdue invoices 30 days&quot;</td>
                    </tr>
                    <tr>
                        <td>Constraints</td>
                        <td>Specify any limitations or requirements</td>
                        <td>&quot;Exclude clients with pending disputes; flag
                        accounts 60 days overdue&quot;</td>
                    </tr>
                   
                </tbody>
            </table>
    

            <h3 className="h3">Examples by Task Type</h3>

            <ol className="ol">
                <li><strong>Scheduling:</strong>
                    <ul className="ul">
                        <li>Good: &quot;schedule a team meeting for next tuesday at 2 pm on Zoom.&quot;</li>
                        <li>Bad: &quot;Set up a meeting on Zoom.&quot;</li>
                    </ul>
                </li>
                <li><strong>Reminders:</strong>
                    <ul className="ul">
                        <li>&quot;remind me to call mom tomorrow at 6 pm.&quot;</li>
                        <li> &quot;remind me about the call later.&quot;</li>

                    </ul>
                </li>
                <li><strong>File Management</strong>
                    <ul className="ul">
                        <li>Good: &quot;move all pdf files from downloads folder to work documents folder.&quot;</li>
                        <li>Bad: &quot;organize all of my files.&quot;</li>

                    </ul>
                </li>
                <li><strong>Emails:</strong>
                    <ul className="ul">
                        <li>
                        Good: &quot;send a thank you email to matthewjohn09@gmail.com for the dolphin project proposal.&quot;
                        </li>
                        <li>
                        Bad: &quot;email John about about the proposal.&quot;
                        </li>

                    </ul>
                </li>
                <li><strong>Social Media:</strong>
                    <ul className="ul">
                        <li>Good: post the image &quot;DSC0047.jpg&quot; on our facebook page at 3 pm with the caption &quot;New
                        product alert!&quot;</li>
                        <li>Bad: &quot;put the image on social media about the product.&quot;</li>

                    </ul>
                </li>
            </ol>
        </>
    );
}