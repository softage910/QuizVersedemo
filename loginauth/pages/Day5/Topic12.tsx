import '../Day1Module.css';

export default function SecTopic() {
    return (
        <>


            <h2 className="h2"><strong>Prompts & Annotations</strong></h2>
            <br />
            <ol className='ol'>
                <li><strong>Prompts</strong>
                    <ul className='ul'>
                        <li>
                            What is a Prompt?
                        </li>

                        <li>
                            A prompt is the instruction to guide ACE on the task you want to complete.
                            Think of it as a clear and complete set of directions outlining what you're
                            doing during your recording. A well-crafted prompt usually includes the
                            intended action and the expected outcome, expressed in straightforward,
                            technical terms.
                        </li>
                        <li>
                            Creating Actionable Tasks
                        </li>
                        <li>
                            Imagine prompts as tasks youd give to a human assistant — keep them
                            short, clear, and direct. Avoid using filler words to ensure your instructions
                            are easy to follow and effective.
                        </li>

                        <li>
                            Refer to Section 8 for some examples of good, actionable prompts.
                        </li>


                    </ul>
                </li>

                <li><strong>What Are Annotations</strong>
                    <ul className='ul'>
                        <li>
                            Annotations involve labelling the smaller actions in your recordings to break
                            down how you're fulfilling each task. By adding annotations to specific
                            parts of your recordings, you provide detailed instructions for each
                            segment. This helps ACE understand the exact steps you took to reach the
                            intended outcome. Annotations are essential, so be sure to highlight the key
                            steps that are crucial for completing the task.
                        </li>
                        <li>
                            An important point to keep in mind is that annotations also have the same
                            structure and functionality as prompts, think of annotations as smaller
                            tasks/prompts, whereby you will be breaking down larger recordings to
                            standalone as smaller recordings with specific annotations/prompts.
                        </li>
                        <li>
                            Key Steps Only Focus on the main steps that are essential to completing
                            the task in the prompt—avoid over-detailing every click.
                        </li>
                        <li>
                            For more details on annotations and instructions on how to add them,
                            please refer to the "Introduction to Engine.pdf".
                        </li>


                    </ul>


                </li>
            </ol>


        </>
    );
}