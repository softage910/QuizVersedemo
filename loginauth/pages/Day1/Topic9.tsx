import '../Day1Module.css';

export default function NinethTopic() {
    return (
        <>
            <h2 className="h2">Glossary</h2>
            <p>
                <strong>Evaluation/Evals:</strong> The process of measuring the current capabilities of an AI model against a predefined set of benchmarks. This approach is essential for pinpointing gaps or shortcomings in the model’s performance, which the data creation team can then address by refining or supplementing the training data. Effective evaluation involves defining clear objectives, selecting appropriate performance metrics, preparing a separate evaluation dataset, running the evaluation, analyzing the results, and then using these findings to drive improvements in the training data or model parameters.
            </p><br />
            <p>
                <strong>Reinforcement Learning from Human Feedback (RLHF):</strong> RLHF is a strategy that integrates direct user feedback into the reinforcement learning process to align the agent’s behavior with human preferences. Instead of relying solely on predefined goals, the agent learns from human evaluations—such as preference rankings or commentary—collected during real-world interactions. These human inputs work alongside automated reward models to guide the agent’s learning, helping it prioritize actions or suggestions that humans find most useful. By iteratively refining its policy in response to user feedback, the model becomes increasingly adept at fulfilling user needs and adhering to desired behavioral standards in complex, evolving environments.
            </p><br />
            <p>
                <strong>Supervised Data:</strong> Supervised learning is like teaching a child by showing them examples and telling them the correct answer. Supervised data refers to labeled examples of user interactions, desired actions, or task outcomes. For instance, a training sample might show a user clicking an icon to open a file, along with a label identifying the correct next step. By learning from these labeled instances, the model can accurately predict the best course of action during real-time interactions. This is widely used for tasks like image recognition, natural language processing, and predictive modeling.
            </p><br />
            <p>
                <strong>Unsupervised Data:</strong> Unsupervised learning is like letting a child explore and discover patterns on their own. Unsupervised data consists of logs or usage patterns without predefined labels. The model attempts to recognize meaningful patterns on its own, such as grouping similar user actions, detecting outliers, or identifying common workflow sequences. This is used for tasks like clustering, dimensionality reduction, and anomaly detection.
            </p><br />
            <p>
                <strong>Atomic task:</strong> A concise, self-contained instruction given to an AI model that focuses on a single, specific task or concept. They are designed to elicit targeted responses without requiring additional context or follow-up prompts. They have a single-task focus (address one objective per prompt). Atomic tasks can be combined to create more complex tasks. They are the building blocks of automation.
            </p><br />
            <p>
                <strong>Non-atomic task:</strong> A non-atomic task refers to a complex action that can be broken into smaller, more fundamental steps. This means it cannot be completed in a single, indivisible operation, unlike an atomic task. Non-atomic tasks are essentially workflows or scripts that orchestrate the execution of multiple atomic tasks. The ability to decompose non-atomic tasks into atomic ones is crucial for automation and AI-driven task completion.
            </p><br />
            <p>
                <strong>Synthetic data:</strong> Synthetic data is artificially generated information that mimics real-world data. It&apos;s created using algorithms and statistical models that capture the patterns, characteristics, and relationships found in real data. Think of it as a digital twin of real data, but without any of the actual sensitive information.
            </p><br />
            <p>
                <strong>Few-shot learning:</strong> Few-shot learning tackles the problem of training machine learning models when only a limited number of labeled examples are available for each class or task. It leverages prior knowledge from related tasks or categories.
            </p><br />
            <p>
                <strong>Zero-shot learning:</strong> Zero-shot learning trains models to recognize and classify new categories without seeing any examples during training, relying on auxiliary information that describes the unseen categories.
            </p><br />
            <p>
                <strong>Generalization:</strong> Generalization is the ability of a trained model to perform accurately on new, unseen data. It bridges the gap between training data and real-world applications.
            </p><br />
            <p>
                <strong>Labeled data:</strong> Labeled data comprises input-output pairs, where each input has a corresponding target value or category. It provides explicit examples of relationships for the model to learn.
            </p><br />
            <p>
                <strong>Unlabeled data:</strong> Unlabeled data consists of raw data without predefined labels, holding value for uncovering patterns, structures, and relationships.
            </p>
        </>
    );
}