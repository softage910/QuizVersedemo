import '../Day1Module.css';

export default function SecondTopic() {
    return (
        <>

            <h2 className="h2"><strong>Introduction To ENGINE</strong></h2>
            <p>
                The data you create on FLUXE can now be accessed for reviewing, annotating
                or flagging on ENGINE.
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.0.png'/>
                </figure>
                <br />
                Once you log in, the Engine interface will show up like this:
                <br />
                <figure className='img-511'>
                    <img src='../images/5.2.1.png'/>
                </figure>
                <br />
                You can view Recordings and Executions by clicking on the respective
                highlighted links
                <br />
                <figure className='img-511'>
                    <img src='../images/5.2.2.png'/>
                </figure>
                <br />
                You can filter your recordings by tags to check the recordings of specific tags.
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.3.png'/>
                </figure>
                <br />
                You can also search for specific recordings, either by keywords, or by putting in
                the whole prompt, in the “search instructions text box
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.4.png'/>
                </figure>
                <br />
                You can also filter your recordings using a date range, as shown here
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.5.png'/>
                </figure>
                <br />
                Your recordings will show up on the engine page as displayed:
                <br />
                <figure className='img-511'>
                    <img src='../images/5.2.6.png'/>
                </figure>
                <br />
                You can click on specific recordings to see your created data
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.0.1.png'/>
                </figure>
                <br />
                In case of incorrect/undesirable actions in a recording, you can flag it by
                selecting the flag icon
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.8.png'/>
                </figure>
                <br />
                On clicking the flag icon, you will encounter this pop-up
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.9.png'/>
                </figure>
                <br />
                You can type and explain your reason(s) for flagging the recording here
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.10.png'/>
                </figure>
                <br />
                After flagging, the recordings will show up as greyed out on your recordings
                page
                <br />
                <br />
            </p>
            <h2 className="h2"><strong>Annotations</strong></h2>
            <p>
                You can annotate specific parts of your recordings to give detailed instructions
                per segment. This is particularly useful when your recording has a mix of
                features while performing one task. Take this recording of a data creator
                collecting data on chess for example:
                <br />
                <figure className='img-51'>
                    <img src='../images/5.2.11.png'/>
                </figure>
                <br />

                Here you can see events marked with red/blue dots on this timeline of the
                recording, under which you can see "Set Start" and "Set End" buttons, with a
                text box to write instructions for the selected segment, and an option to save
                the annotated segment.
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.12.png'/>
                </figure>
                <br />
                Select a Starting point and an end point, and put in your instructions for this
particular segments, and save it.
<br />
<figure className='img-510'>
                    <img src='../images/5.2.13.png'/>
                </figure>
                <br />

                You can do multiple annotations on the same recording, distinguished by either
actions, or different verbiage for the same action.

<br />
<figure className='img-51'>
                    <img src='../images/5.2.14.png'/>
                </figure>
                <br />
                <br />
                <figure className='img-51'>
                    <img src='../images/5.0.16.0.png'/>
                </figure>
                <br />

                Lets take a look at another example, in this task, the data creator is recording
data to train ACE on Microsoft Word, the instruction is "center align the 'next
steps' section and apply green shading in project report.docx".
                <br />
                <figure className='img-510'>
                    <img src='../images/5.2.15.png'/>
                </figure>
                <br />

                Here we can annotate two actions, to mark Align and Intend selection, and the
action of selecting a shade. Adding two annotations here, will make ACE
understand the specific steps you have taken to reach the intended conclusion
of the recording; which is "center align the 'next steps' section and apply green
shading in project report.docx".
<br />
<figure className='img-51'>
                    <img src='../images/5.2.16.png'/>
                </figure>
                <br />





                <h2 className="h2"><strong>Let's get to creating data now!!</strong></h2>

             




      
            </p>

        </>
    );
}