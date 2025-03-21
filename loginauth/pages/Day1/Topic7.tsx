import '../Day1Module.css';

export default function SeventhTopic() {
    return (
        <>
            <h2 className="h2">What works and what does not?</h2>

            <h3 className="h3">What works 😃</h3>
            <ol className="ol">
                <li><strong>High-quality data</strong> – High-quality, accurate, and relevant data is crucial for effective AI model training. This includes:

                    <ul className="ul">
                        <li><strong>Diverse datasets:</strong> Incorporating a wide range of scenarios and examples to improve model generalization.</li>
                        <li><strong>Well-labeled data:</strong> Accurately annotated data for supervised learning tasks.</li>
                        <li><strong>Domain-specific knowledge:</strong> Incorporating expertise relevant to the problem being solved.</li>
                    </ul>
                </li>
                <li><strong>Effective data processing</strong>
                    <ul className="ul">
                        <li><strong>Data cleaning:</strong> Removing errors, inconsistencies, and noise from raw data.</li>
                        <li><strong>Data normalization:</strong> Scaling numerical features to a standardized range.</li>
                        <li><strong>Feature engineering:</strong> Creating relevant features that capture important aspects of the data.</li>
                    </ul>
                </li>
                <li><strong>Proper data management</strong>
                    <ul className="ul">
                        <li><strong>Data splitting:</strong> Using separate datasets for training, validation, and testing.</li>
                        <li><strong>Cross validation</strong></li>
                        <li><strong>Regular updates:</strong> Continuously refreshing training data to keep models current.</li>
                    </ul>
                </li>
            </ol><br />

            <h3 className="h3">What does not work 🫣</h3>
            <ol className="ol">
                <li><strong>Poor data quality:</strong> Biased data that doesn&apos;t represent the full-spectrum of real-world scenarios, insufficient data, or mislabeled data leading to model confusion.</li>
                <li><strong>Improper data handling:</strong> Data leakage (allowing information from validation or test sets to influence training) and failure to protect sensitive information.</li>
                <li><strong>Ignoring data context:</strong> Not considering the broader implications or sources of the data.</li>
                <li><strong>Ineffective data strategies:</strong> Over-reliance on synthetic data, neglecting data diversity, and ignoring data drift.</li>
            </ol>
        </>
    );
}