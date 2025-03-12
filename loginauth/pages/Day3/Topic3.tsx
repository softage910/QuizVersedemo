import '../Day1Module.css';

export default function ThirdTopic() {
    return (
        <>
            <h2 className="h2">Best Practices</h2>
            <br />

            <ol className="ol">
                <li><strong>Dos:</strong>
                    <ul className="ul">
                        <li>Use simple, natural and conversational prompts.</li>
                        <li>Use tool-specific jargons and syntax (e.g., @mention in Slack, #tags in Asana).</li>
                        <li>Name files or folders exactly: "Q4_Report.docx not just" "the report".</li>
                    </ul>
                </li>
                <li><strong>Don't's:</strong>
                    <ul className="ul">
                        <li>Use vague terms: ❌ “Handle files sometime today → ✅ “Move *.csv files to Backup folder by 5
                            PM".</li>
                        <li>Overload single prompts: Split "Schedule meeting AND draft report" into separate tasks.</li>
                        <li>Assuming the agent knows context without specifying.</li>

                    </ul>
                </li>

            </ol>
            <br />
            <h2 className="h2"><strong>Use Cases</strong></h2>
            <p>
                Use cases demonstrate the practical application of action agents in real-world situations, highlighting
                their ability to interpret instructions, process relevant data, and execute actions to achieve desired
                outcomes efficiently and accurately.
                The concept of use cases for action agents is inherently fluid and multifaceted and constantly
                evolving. Instead of fitting into predefined categories, their applications are better understood as a
                spectrum of possibilities driven by the specific problems they are designed to solve.
                Essentially, a use case for an action agent emerges from the intersection of its capabilities—
                perception, decision-making, and action—with a particular domains needs and constraints. Thismeans that the same underlying principles of autonomous action can manifest in vastly different ways
                depending on the context.
                For instance, an action agents use case could involve navigating a physical environment
                autonomously in one scenario and making real-time decisions in a financial trading system in another
                (think of it like a human hand - it can be used for everything from delicate surgery to heavy lifting).
                The core functionality remains consistent—taking actions based on perceived information—but the
                specific implementation and objective vary greatly.
                While the specifics vary, here are some broad areas where action agents are making a difference:
                Automation: Taking over repetitive tasks, from scheduling meetings to managing inventory.
                Personal Assistance: Helping users with tasks like providing information, recommendations,
                booking travel or managing their finances.
                Process Optimization: Analyzing data and making changes to improve efficiency.
                Creative Augmentation: Assisting with content creation and design.
                Order management: Track orders, process returns, etc
                That said, some use cases require simple actions in structured environments, while others involve
                complex decision-making in unpredictable situations.
            </p><br />
            <h2 className="h2"><strong>What Action Agents Do</strong></h2>
            <p>
                At their core, action agents are about enabling AI to do things, not just provide information. This
                means they can:
                Interact with the real world: This could be through software (like changing settings, sending emails) or
                physical actions (like moving a robot arm).
                Make decisions: Based on their understanding of the environment and their goals, they can choose
                the best course of action.
                Learn and adapt: They can improve their performance over time by analyzing the results of their
                actions.
            </p><br />

            <h2 className="h2"><strong>Example:</strong></h2>


            <ol className="ol">
                <li><strong>Contextual actions:</strong>
                    <ul className="ul">
                        <li>Right-clicking on file shows options like "open", "rename", or "delete".</li>
                        <li>Selecting text reveals options like "copy", "cut", or "format".</li>
                        <li>Viewing a product displays actions like "add to cart" or "save for later".</li>
                    </ul>
                </li>
                <li><strong>Non-contextual actions:</strong>
                    <ul className="ul">
                        <li>Show the help menu.</li>
                        <li>Open settings.</li>


                    </ul>
                </li>

            </ol>
            <br />

            <h2 className="h2"><strong>Additional Reading Materials:</strong></h2>

            <ol className="ol">
   

                <li>
                <a href="https://drive.google.com/file/d/1qRY4-6-QoNCwBp3vhX60gZmC4xzZeWxY/view?usp=share_link" target="_blank">                                <button className='Watch-Button'>
                                    Resource1
                                </button>
                            </a>
                </li>

                <li>
                <a href="https://drive.google.com/file/d/1qRY4-6-QoNCwBp3vhX60gZmC4xzZeWxY/view?usp=share_link" target="_blank">                                <button className='Watch-Button'>
                                    Resource2
                                </button>
                            </a>

                </li>

            </ol>



            




        </>
    );
}