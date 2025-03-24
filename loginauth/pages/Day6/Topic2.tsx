import '../Day1Module.css';

export default function SecondTopic() {
    return (
        <>
            <h2 className="h2"><strong>FAQs</strong></h2>
            <ol className='ol'>
            <li><strong>I dont have an account on
                x.com/ canva, what should I do?</strong>
                <ul className='ul'>
                    <li>Use your company provided email and phone number to create accounts. Populate those
                    accounts to emulate a real user.</li>

                </ul>
       
            </li>
            <li>
                <strong>I am having trouble setting up OBS/ DuckTrack on my system. What can I do?</strong>
                <ul className='ul'>
                    <li>Contact our IT admin, they will set up the required applications on your system.</li>

                </ul>
            </li>
            <li>
                <strong>How can I ensure optimal/clean recordings?</strong>
                <ul className='ul'>
                    <li>You can do an honest assessment of your recordings before submission, checking strictly if
your recordings follow every parameter outlined in the &quot;Data Creation Guidelines&quot; document
provided to you.</li>

                </ul>
            </li>
            
            <li>
                <strong>Some accounts require a phone number to sign in. What should I do?</strong>
                <ul className='ul'>
                    <li>You can use your phone number for the same, or contact our IT admin to provide you a
                    company issued sim card.</li>

                </ul>
            </li>
            <li><strong>I have completed the 100 tasks mentioned on the sheet. Where should I submit them?</strong>
                <ul className='ul'>
                    <li>You can upload the 100 videos onto your Google Drive on your official mail ID, keep the
visibility open to the organization, and paste the links in your Google Sheet, in the allocated
column.</li>

                
            </ul></li>
            </ol>
         

        </>
    );
}