import '../Day1Module.css';
import Image from 'next/image';
import three from '../../public/Images/5.0.png';
import four from '../../public/Images/5.1.1.png';
import five from '../../public/Images/5.1.2.png';
import six from '../../public/Images/5.1.2.1.png';
import seven from '../../public/Images/5.1.3.png';
import eight from '../../public/Images/5.1.11.png';
import nine from '../../public/Images/5.1.5.png';
import ten from '../../public/Images/5.1.6.png';
import eleven from '../../public/Images/5.1.7.png';
import twelve from '../../public/Images/5.1.8.png';
import thirteen from '../../public/Images/5.1.9.png';
import fourteen from '../../public/Images/5.1.10.png';
import fifteen from '../../public/Images/5.1.4.png';

export default function FirstTopic() {
    return (
        <>


            <h2 className="h2"><strong>Introduction To FLUXE</strong></h2>
            <p>
                Fluxe is the tool on which you will be collecting data to train ACE.
                <br />
                <figure >
                    {/* <img src='../images/5.0.png'/> */}
                    <Image src={three} width={800} height={0} alt="Logo" style={{borderRadius:'9px'}} />

                </figure>
                <br />
                While installing Fluxe, if you are not able to open the installer, follow these
                steps:
                Go into &quot;Privacy & Security&quot; ,
                <figure >
                    {/* <img src='../images/5.1.1.png'/> */}
                    <Image src={four} width={500} height={0} alt="Logo" style={{borderRadius:'9px'}} />
                </figure>
                <br />
                and then scroll down to the botton in &quot;Privacy and Security section&quot; ,
                <figure>
                    {/* <img src='../images/5.1.2.png'/> */}
                    <Image src={five} width={400} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                </figure>
                <br />
                you&apos;ll see a button saying &quot;Open Anyway&quot; -- after that you can try opening the
                Fluxe app again.
                <br />
                <figure>
                    {/* <img src='../images/5.1.2.1.png'/> */}
                    <Image src={six} width={600} height={0} alt="Logo" style={{borderRadius:'9px'}} />
                </figure>
                <br />
                Instead of OpenOffice, it will say Fluxe, Select Open Anyway for Fluxe, and it
                should work!
                Fluxe looks like this on your &quot;Applications&quot; page
                <br />
                <figure>
                    {/* <img src='../images/5.1.3.png'/> */}
                    <Image src={seven} width={110} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                </figure>
                When active, it looks like this on your toolbar
                <br />
                <figure>
                    {/* <img src='../images/5.1.11.png'/> */}
                    <Image src={eight} width={700} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                </figure>
                <br />
                <h2 className="h2">How To Use Flux</h2>
                <ol className="ol">
                    <li>
                        <strong>Click on the Hammer icon on your tool bar</strong>
                        <br />
                        <figure>
                            {/* <img src='../images/5.1.5.png'/> */}
                            <Image src={nine} width={100} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                        </figure>
                        <br />
                    </li>
                    <li>
                        <strong>It will open the Fluxe interface like this</strong>
                        <br />
                        <figure>
                            {/* <img src='../images/5.1.6.png'/> */}
                            <Image src={ten} width={550} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                        </figure>
                        <br />
                    </li>
                    <li>
                        <strong>Type in/Paste the prompt you wish to record like this:</strong>
                        <br />
                        <figure>
                            {/* <img src='../images/5.1.7.png'/> */}
                            <Image src={eleven} width={550} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                        </figure>
                        <br />
                    </li>
                    <li>
                        <strong>Once you have typed/pasted the prompt, click on the &quot;Show Settings&quot; button to open the tags menu, which will show up like this:</strong>
                        <br />
                        <figure>
                            {/* <img src='../images/5.1.8.png'/> */}
                            <Image src={twelve} width={670} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                        </figure>
                        <br />
                    </li>
                    <li>
                        <strong>After selecting the relevant tag, (for instance , for this prompt it will be &quot;op-follow-people&quot;), click on the &quot;Exit Settings&quot;, </strong>

                    </li>
                    <li>
                        <strong>Click on &quot;Start Recording&quot;, and a countdown will start counting down from 3.</strong>
                        <br />
                        <figure>
                            {/* <img src='../images/5.1.9.png'/> */}
                            <Image src={thirteen} width={550} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                        </figure>
                        <figure >
                            {/* <img src='../images/5.1.10.png'/> */}
                            <Image src={fourteen} width={550} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                        </figure>
                        <br />
                    </li>
                    <li>
                        <strong>Once the countdown finishes , Fluxe is actively recording your data. While recording, a new icon will show up on your toolbar,like this:</strong>
                        <br />
                        <figure>
                            {/* <img src='../images/5.1.4.png'/> */}
                            <Image src={fifteen} width={550} height={0} alt="Logo" style={{borderRadius:'9px'}}/>
                        </figure>
                        <br />
                    </li>
                    <li>
                        <strong>To stop a recording use the shortcut use the shortcut</strong>
                        <br />
                        <br />

                    </li>
                    <li>
                        <strong>Thats it ! As simple as that . You can start creating Data to train ACE now!</strong>
                    </li>




                </ol>



            </p><br />

        </>
    );
}