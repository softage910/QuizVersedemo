import '../Day1Module.css';

export default function FirstTopic() {
    return (
        <>
            <h2 className="h2">Objective: Learning Why Data Matters in AI
            Training</h2>
            <hr />

            <h2 className="h2"><strong>What Is Data in AI?</strong></h2>
            <p>
            In AI, data is the stuff we give a computer to help it learn. It can be things like:
            </p><br />
            <ul className='ul'>
                <li>Text (words, sentences)</li>
                <li>Numbers</li>
                <li>Pictures</li>
                <li>Sounds</li>
                <li>Videos</li>

            </ul>
            <p>
            The computer uses this information to figure out patterns, like how to
understand a sentence or recognize an object in a photo. Without data, the AI
can&apos;t learn or do anything useful.

            </p>
            <br />
            <p>Think of it like this:</p>
            
            <p style={{fontSize:'1.5rem'}}>Data is the textbook, and the AI is the student. If the student
            never reads the textbook, they won&apos;t pass the test.</p>

            <br />
            <hr />
            <h2 className="h2">Why Is Data So Important?</h2>
            <p>Good data helps AI do a better job. Bad or not enough data causes problems.
            Here&apos;s what good data helps with:</p>
            <br />
            <ul className='ul'>
                <li><strong>Learning:</strong> AI learns by looking at examples.</li>
                <li><strong>Accuracy:</strong> The more and better the examples, the smarter the AI gets.</li>
                <li><strong>Fairness:</strong>Fairness: If the examples include different types of people or situations, the
                AI will treat everyone more fairly.</li>
                <li><strong>Handling new situations:</strong> Good data helps the AI do well even when it sees
                something it hasn&apos;t seen before.</li>

            </ul>
            <br />
            <hr />
            <h2 className="h2">What Kind of Data Do We Use?</h2>
            <p >To train AI to help people with tasks (like booking a flight or managing money),
            we give it <strong>prompts</strong> — simple instructions written like what a person might say.</p>
            <br />
            <p style={{fontSize:'1.5rem'}}>Example Prompt:</p>
        
            <p   style={{
    background: 'linear-gradient(90deg, #fdfbfb, #ebedee)',
    padding: '16px 20px',
    borderLeft: '6px solid #00b894',
    borderRadius: '8px',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    color: '#2d3436',
    marginTop: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
  }}>&quot;Book a flight from New York to Los Angeles on December
            15, after 3 pm, in business class.&quot;</p>
            <br />
            <p>From this, the AI learns how to:</p>
            
            <ul className='ul'>
                <li>Understand what the person wants</li>
                <li>Pick out details like the date, time, and type of seat</li>
                <li>Search for the right flight</li>
                <li>Give the person a helpful answer</li>
            </ul>
            <p style={{fontSize:'1.5rem'}}>More Examples:</p>
            <ul className='ul'>
                <li>&quot;Help me stick to a $4,000 monthly budget.&quot;</li>
                <li>&quot;Find fun weekend activities near me.&quot;</li>
                <li>&quot;Show all files that mention &apos;quarterly report&apos;.&quot;</li>
            </ul>
            <br />  
            <hr />
            <h2 className="h2">How We Collect Data</h2>
            <p>We collect different types of simple tasks for the AI to learn from:</p>
            <br />
            <table className='Day1Table'>
                <thead>
                    <tr>
                        <th>Task Type</th>
                        <th>What It Teaches</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Typing</td>
                        <td>How people type or write things</td>
                       
                    </tr>
                    <tr>
                        
                        <td>Clicking</td>
                        <td>How people use a mouse</td>
                    </tr>
                    <tr>
                        <td>One-step tasks/ Atomic
                        Actions</td>
                        <td>Very simple actions like clicking a button</td>
                
                    </tr>
                    <tr>
                        
                        <td>Small tasks</td>
                        <td>Short tasks like filling out a form</td>
                    </tr>
                    <tr>
                        <td>Full tasks</td>
                        <td>Longer tasks with multiple steps</td>
                    
                    </tr>
                    <tr>
                        <td>Real usage</td>
                        <td>What people do in real life, without editing</td>
                  
                    </tr>
                    <tr>
                        <td>Human examples</td>
                        <td>Tasks where a person showed the correct steps</td>
                      
                    </tr>

                </tbody>
            </table>
            <hr />
            <h2 className="h2">What Works and What Doesn&apos;t</h2>
            <p style={{fontSize:'1.5rem'}}>✅ What Works</p>
            <br />
            <ul className='ul'>
                <li>Using clear, correct examples</li>
                <li>Having a variety of examples</li>
                <li>Keeping data clean and organized</li>
            
            </ul>
            <br />
            <p style={{fontSize:'1.5rem'}}>
            ❌ What Doesn&apos;t Work
            </p>
            <br />
            <ul className='ul'>
                <li>Bad or missing data</li>
                <li>Only using the same kind of example over and over</li>
                <li>Forgetting to update the data when things change</li>
            </ul>

            <br />
            <hr />
            <h2 className="h2">Checking If the AI Is Learning</h2>
            <p>After training the AI, we test it to see how well it&apos;s doing. We check:</p>
            <ul className='ul'>
                <li>How often it gets things right</li>
                <li>If it treats different kinds of people fairly</li>
                <li>If it still works in new situations</li>
            </ul>
            <br />
            <p>If it doesn&apos;t do well, we go back and improve the data or change how it learns</p>
            <br />
            <hr />

            <h2 className="h2">Some Helpful Terms</h2>
            <br />
            <ul>
                <li><strong>Training:</strong> Teaching the AI using examples</li>
                <br />
                <li><strong>Prompt:</strong> A message or question we give the AI</li>
                <br />
                <li><strong>Labeled data:</strong> Examples that show the right answer</li>
                <br />
                <li><strong>Unlabeled data:</strong> Examples without answers (the AI has to guess)</li>
                <br />
                <li><strong>Task:</strong> Something the AI is asked to do</li>
            </ul>


        </>
    );
}