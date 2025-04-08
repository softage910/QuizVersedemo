import '../Day1Module.css';

export default function  SevTopic() {
    return (
        <>
   
             <h2 className="h2"><strong>Flagging Recordings</strong></h2>
            <ol className='ol'>
                <li>When To Flag : Flag recordings if you encounter major mistakes such as typos, misclicks,
or disrupted workflows. In these cases, its best to halt and restart the
recording to ensure accuracy.</li>
                <li>
                    Minor Mouse Movements : Slightly off-target clicks are acceptable if they dont cause confusion in the
                    final steps.
                </li>
                <li>
                    How To Flag : The flagging process is detailed in the &quot;Introduction To Engine.pdf&quot;. We
recommend referring to this document for step-by-step instructions on
properly flagging your recordings.
                </li>

            </ol>
        </>
    );
}