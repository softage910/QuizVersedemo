import '../Day1Module.css';

export default function SecondTopic() {
    return (
        <>
            <h2 className="h2">Why is data important for model training?</h2>
            <p>
                AI model training relies on data as its foundational resource, determining everything from basic functionality to real-world performance. It directly influences how well (or poorly) a model performs. <strong>High-quality training data enables the models to recognize patterns, make accurate predictions, and generalize their knowledge to new situations. Poor quality or biased data can lead to inaccurate predictions, unpredictable behavior, and unfair outcomes.</strong> Here&apos;s why data is important for model training:
            </p><br />
            <ul className="ul">
                <li><strong>Learning patterns and relationships</strong> - Machine learning models depend on data to identify underlying relationships and patterns. Without enough high-quality, relevant data, models cannot learn these relationships accurately.</li>
                <li><strong>Generalization</strong> - Access to diverse data allows a model to learn how to handle new, unseen examples. When the training data reflects a condition a model will encounter in real-world usage, it can generalize more effectively and perform better on future tasks.</li>
                <li><strong>Reducing bias</strong> - Diverse and balanced datasets help reduce the likelihood that the model will develop unwanted biases. If certain groups or scenarios are underrepresented in the data, the model might perform poorly or unfairly in those cases.</li>
                <li><strong>Improving accuracy and robustness</strong> - High-quality and sufficient data can significantly improve model accuracy. More data examples (assuming they are relevant and well-labeled) provide a more complete picture and help the model to be more robust to variations.</li>
                <li><strong>Facilitating proper model selection and tuning</strong> - Different data distributions can help in comparison and selection of the most suitable model architecture and fine-tune hyperparameters for optimal performance.</li>
            </ul>
        </>
    );
}