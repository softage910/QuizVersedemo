import '../Day1Module.css';
import four from '../../public/Images/2.5.png'
import Image from 'next/image';


export default function FifthTopic() {
    return (
        <>
            <h2 className="h2">Level 4: Unique Mac Features</h2>
            <ol className="ol">
                <li>
                    <strong>Time Machine:</strong>
                    <ul className="ul">
                        <li><strong>Use Time Machine:</strong> Assign an external drive in <strong>System Settings &gt; General</strong> to automatically create snapshots of your system.</li>
                        <li><strong>Browse backups:</strong> Use the Time Machine interface to restore files or view the Finder as it appeared on a previous date.</li>
                    </ul>
                </li>
                <li>
                    <strong>Spotlight Search:</strong>
                    <ul className="ul">
                        <li><strong>Press Command + Space:</strong> Opens Spotlight, which finds apps, documents, and text within files.</li>
                        <li>Spotlight can also perform calculations, convert units, and initiate web searches.</li>
                    </ul>

                    <figure className='img-21'>
                        {/* <img src="../images/2.5.png" alt="Spotlight Search Example" /> */}
                        <Image src={four} width={0} height={0} alt="Spotlight Search Example"/>
                       
                    </figure>
                    <blockquote>
                        💡 <strong>Spotlight Search is the most used feature on an average Mac. Start using Spotlight search for navigation and much more!</strong>
                    </blockquote>
                </li>
                <li>
                    <strong>Trackpad Gestures:</strong>
                    <ul className="ul">
                        <li><strong>Enable &quot;Tap to Click&quot;:</strong> Under <strong>System Settings &gt; Trackpad</strong> for single-touch clicks.</li>
                        <li><strong>Swipe up with three fingers:</strong> To enter Mission Control and see all open windows.</li>
                        <li><strong>Three-Finger swipe down:</strong> To see only the windows of the current app.</li>
                        <li><strong>Three-finger swipe left/right:</strong> To move between full-screen apps or desktops.</li>
                        <li><strong>Pinch with five fingers:</strong> To open Launchpad.</li>
                    </ul>
                </li>
                <li>
                    <strong>Essential Keyboard Shortcuts:</strong>
                    <ul className="ul">
                        <li><strong>Option + Command + Space:</strong> Launch a new Finder search window.</li>
                        <li><strong>Command + I:</strong> Open the &quot;Get Info&quot; panel for the selected file.</li>
                        <li><strong>Space Bar:</strong> Activate Quick Look on the selected file.</li>
                        <li><strong>Command + W:</strong> Close the active window or tab.</li>
                        <li><strong>Command + 1, 2, 3, etc.:</strong> Jump directly to a specific browser tab.</li>
                        <li><strong>Command + C and Command + V:</strong> Copy and paste, respectively.</li>
                        <li><strong>Shift + Command + V:</strong> Paste text without formatting.</li>
                        <li><strong>Option + Command + Esc:</strong> Open the Force Quit menu.</li>
                    </ul>
                </li>
            </ol>
        </>
    );
}