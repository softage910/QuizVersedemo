import '../Day1Module.css';
import four from '../../public/Images/2.6.jpeg';
import Image from 'next/image';

export default function EighthTopic() {
    return (
        <>
            <h2 className="h2">Setting Up Your macOS System</h2>
            <h3>Creating Your Apple ID</h3>
            <p>
                Before starting work on the macOS system, you will need to create an Apple ID. Please follow the instructions below to set up your Apple ID before you begin using your macOS device for work purposes.
            </p>

            <figure>
                {/* <img src="../images/2.6.jpeg" alt="Apple ID Setup Example" /> */}
                <Image src={four} width={400} height={0} alt="Apple ID Setup Example" style={{borderRadius:'9px'}}/>
            </figure>
            <ol className="ol">
                <li><strong>Open System Settings:</strong> Click the Apple menu () in the top-left corner and select <strong>System Settings</strong>.</li>
                <li>
                    <strong>Start the Account Creation Process:</strong>
                    <ul className="ul">
                        <li>Select <strong>Apple ID</strong> and click <strong>Sign In</strong>.</li>
                        <li>If you don&apos;t have an account, choose <strong>Don&apos;t Have an Account?</strong> and click <strong>Continue</strong>.</li>
                        <li>Enter your first name, last name, date of birth, email address, and create a password.</li>
                        <li>Choose your country or region (your primary email will serve as your Apple ID).</li>
                    </ul>
                </li>
                <li>
                    <strong>Enter Payment Details (Optional):</strong>
                    <ul className="ul">
                        <li>Provide payment information or select <strong>None</strong>, then click <strong>Continue</strong>.</li>
                    </ul>
                </li>
                <li>
                    <strong>Confirm Your Phone Number:</strong>
                    <ul className="ul">
                        <li>Verify your phone number when prompted, then click <strong>Next</strong>.</li>
                    </ul>
                </li>
                <li>
                    <strong>Verify Your Email Address:</strong>
                    <ul className="ul">
                        <li>Check your email for a verification message from Apple and follow the instructions. Once verified, you can sign in to access the App Store, iCloud, and other Apple services.</li>
                    </ul>
                </li>
            </ol>
            <hr />


            <aside>
                💡 <strong>DO NOT, UNDER ANY CIRCUMSTANCES, CHANGE THE MAC SETTINGS.</strong><br />
                For the Mac to function as intended (and not like a Windows laptop), it is crucial that you familiarize yourself with the Mac ecosystem. Your success as a data creator depends on using the Mac as designed.
            </aside>
        </>
    );
}