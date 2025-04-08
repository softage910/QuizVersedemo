import '../Day1Module.css';

export default function FourthTopic() {
    return (
        <>
            <h2 className="h2">The evolving nature of data collection to train and test different versions of the models</h2>
            <p>
                The methodologies for collecting data to train and test action agents have evolved significantly, driven by advances in AI, the need for diverse datasets, and the complexity of tasks these agents perform.
            </p>

            <h3 className="h3">Key evolutionary trends in AI data collection</h3>
            <table className='Day1Table'>
                <thead>
                    <tr>
                        <th>Traditional approach</th>
                        <th>Modern innovation</th>
                        <th>Benefit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Manual web scraping</td>
                        <td>Federated learning systems</td>
                        <td>Preserves data privacy</td>
                    </tr>
                    <tr>
                        <td>Single-source datasets</td>
                        <td>Multi-modal synthetic data</td>
                        <td>Covers edge cases cost-effectively</td>
                    </tr>
                    <tr>
                        <td>Static prepackaged datasets</td>
                        <td>Continuous data pipelines</td>
                        <td>Enables real-time model adaption</td>
                    </tr>
                    <tr>
                        <td>Basic anonymization</td>
                        <td>Differential privacy protocols</td>
                        <td>Balances utility/security</td>
                    </tr>
                    <tr>
                        <td>Human-only labeling</td>
                        <td>Hybrid AI-human RLHF workflows</td>
                        <td>Improves annotation efficiency</td>
                    </tr>
                </tbody>
            </table>

            <ol className="ol">
                <li><strong>From static to dynamic data collection</strong>
                    <ul className="ul">
                        <li>Early approaches relied on predefined datasets (e.g., surveys, literature) to model agent behavior. Modern methods emphasize real-time, iterative data collection to adapt agents to dynamic environments.</li>
                        <li><a className="a" href="https://arxiv.org/pdf/2406.04151" target="_blank">AgentGym</a>: A framework enabling agents to explore diverse tasks and environments concurrently, generating real-time trajectories for training. This allows agents to evolve beyond static datasets by testing hypotheses and refining strategies.</li>
                        <li>Reinforcement Learning from Human Feedback (RLHF): Agents collect feedback from human interactions to adjust actions, blending human oversight with automated learning.</li>
                    </ul>
                </li>
                <li><strong>Synthetic data and Generative AI</strong>
                    <ul className="ul">
                        <li>Generative AI: Creates realistic synthetic datasets (text, images, code) to fill gaps, augment training, and simulate edge cases. For example, healthcare models use synthetic patient data to bypass privacy restrictions.</li>
                        <li>Agent Self-Evolution: Frameworks like AgentEvol enable agents to generate and refine their own training data through iterative exploration, reducing reliance on human-labeled datasets.</li>
                    </ul>
                </li>
                <li><strong>Iterative data filtering and quality control</strong>
                    <ul className="ul">
                        <li>Rejection Fine-Tuning: Only trajectories that pass validation tests are retained, minimizing error propagation.</li>
                        <li>Automated Tools: Platforms like AgentTraj log agent actions (e.g., code edits, validation steps) and filter low-quality trajectories using smaller proxy models for efficiency.</li>
                    </ul>
                </li>
                <li><strong>Domain-specific data strategies</strong>
                    <ul className="ul">
                        <li>Software Engineering Agents: Nebius&apos;s SWE-bench Extra collects trajectories from coding agents solving real-world GitHub issues, iterating from single-file fixes to multi-file patches.</li>
                        <li>Behavioral Cloning: Agents mimic expert trajectories (e.g., customer service workflows) to learn task-specific actions.</li>
                    </ul>
                </li>
                <li><strong>Collaborative and automated harvesting</strong>
                    <ul className="ul">
                        <li>Crowdsourcing: Platforms gather diverse, large-scale datasets (e.g., road sign images for vision models).</li>
                        <li>AI-Assisted Collection: Tools like <a className="a" href="https://www.xenonstack.com/blog/ai-agents-for-data-management" target="_blank">AI Copilot</a> analyze historical patterns to recommend relevant datasets, while similarity detection algorithms identify complementary data sources.</li>
                    </ul>
                </li>
            </ol>
        </>
    );
}
