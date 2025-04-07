import '../Day1Module.css';

export default function ThirdTopic() {
    return (
        <>
            <h2 className="h2">Examples of data to train the models</h2>
            <p>
                Training action agents involves feeding these systems with a diverse set of data, including natural language prompts that specify various tasks or preferences. The goal is to develop intelligent systems capable of understanding user requests, applying relevant filters or actions, and providing appropriate responses or solutions. This can apply to a wide range of tasks, such as flight bookings, personal finance management, household chore scheduling, or travel planning.
            </p>
            <h3 className="h3">Key Components of Training</h3>
            <ol className="ol">
                <li><strong>Data collection</strong>
                    <ul className="ul">
                        <li>Gather a diverse set of natural language prompts that specify various tasks or preferences. These prompts should cover different domains and include various filters or specifications.</li>
                    </ul>
                </li>
                <li><strong>Data processing</strong>
                    <ul className="ul">
                        <li>Tokenize prompts to extract key information.</li>
                        <li>Convert extracted data into a standardized format for easier processing.</li>
                    </ul>
                </li>
                <li><strong>Generalization techniques</strong>
                    <ul className="ul">
                        <li>Generate varied prompts to enhance the system&apos;s robustness.</li>
                        <li>Test the agent on different datasets to ensure broad applicability.</li>
                        <li>Combine multiple models or approaches for improved performance.</li>
                    </ul>
                </li>
                <li><strong>Training process</strong>
                    <ul className="ul">
                        <li>
                            <strong>Input</strong>: Feed the action agent with diverse prompts representing various tasks and user preferences.
                        </li>
                        <li><strong>Processing</strong>: The agent learns to:
                            <br />
                            <ol className="ol ol1">

                                <li>Understand the context and intent of each prompt.</li>
                                <li>Identify relevant filters and specifications.</li>
                                <li>Apply appropriate actions or algorithms to fulfill the request.</li>
                            </ol>
                        </li>
                        <li><strong>Output</strong>: The agent generates responses or solutions tailored to the user&apos;s input.</li>
                    </ul>
                </li>
                <li><strong>Expected outcomes</strong>
                    <ul className="ul">
                        <li>Comprehend complex, multi-faceted requests.</li>
                        <li>Apply relevant filters and actions based on user preferences.</li>
                        <li>Provide appropriate, personalized responses or solutions.</li>
                        <li>Adapt to various domains and task types.</li>
                    </ul>
                </li>
            </ol>
            <br />
            <p>
                <strong>Example: Flight Booking</strong><br /><br />
                {/* <strong>Input Prompt:</strong> “Book a flight from New York to Los Angeles on December 15, departing after 3 pm, in business class.”<br/><br/>
                        <strong>Agent Actions:</strong><br/>
                        - Identify key information: origin, destination, date, time preference, and class.<br/>
                        - Search available flights matching the criteria.<br/>
                        - Apply filters for business class and departure time.<br/>
                        - Present suitable options to the user.<br/><br/>
                        <strong>Output:</strong> A list of available business class flights from New York to Los Angeles on December 15, departing after 3 pm, sorted by relevance or user preferences. */}
            </p>

            <table className='Day1Table'>
                <thead>
                    <tr>
                        <th>Input Prompt</th>
                        <th>Agent Actions</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Book a flight from New York to Los Angeles on December 15, departing after 3 pm, in business class.</td>
                        <td className='customtd'> - Identify key information: origin, destination, date, time preference, and class.<br />
                            - Search available flights matching the criteria.<br />
                            - Apply filters for business class and departure time.<br />
                            - Present suitable options to the user.<br /></td>
                        <td>A list of available business class flights from New York to Los Angeles on December 15, departing after 3 pm, sorted by relevance or user preferences.</td>
                    </tr>
                </tbody>
            </table> <br />
            <p><strong>More example prompts:</strong></p>
            <ul className="ul">
                <li>Manage monthly expenses with a budget of $4,000.</li>
                <li>Plan a 5-day itinerary for Rome, focusing on historical sites and local cuisine.</li>
                <li>Find family-friendly events scheduled this weekend within a 20-mile radius of my location.</li>
                <li>Show all PDF files containing the phrase &apos;quarterly report&apos; created in the last year.</li>
                <li>Set up iCloud Drive to sync my Desktop and Documents folders across all my Apple devices.</li>
            </ul>
        </>
    );
}