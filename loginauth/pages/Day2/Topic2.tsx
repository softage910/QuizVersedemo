import '../Day1Module.css';



export default function SecondTopic() {
    return (
        <>

            <h2 className="h2">Level 1: The Mac Desktop Essentials</h2>
            <ol className="ol">
                <li>
                    <strong>Familiarize Yourself with the Menu Bar:</strong>
                    <ul className="ul">
                        <li>On a Mac, there&apos;s a single menu bar at the top of the screen. As you switch apps, the menu items adapt to match the current application.</li>
                    </ul>

                    <figure className='img-21'>
                        <img src="../images/2.0.png" alt="Menu Bar Example" />
                    </figure>
                    <ul className="ul">
                        <li>One constant menu item is the <strong>Apple menu</strong>. Consider the <strong>Apple menu</strong> as your system control center. From there, you can shut down, restart, force quit apps, or quickly open System Settings.</li>
                        <li>Observe that the menu bar is divided into two sections. On the right, you&apos;ll find battery status, Wi-Fi, and the date/time.</li>
                    </ul>
                </li>
                <li>
                    <strong>Explore the Control Center:</strong>
                    <ul className="ul">
                        <li>Access quick settings—such as brightness, volume, headphone connections, or sound output—directly from the menu bar.</li>
                    </ul>

                    <figure className='img-22'>
                        <img src="../images/2.2.png" alt="Control Center Example" />
                    </figure>
                    <ul className="ul">
                        <li>Click the date and time to open the Notification Center, which shows recent alerts and hosts widgets (e.g., weather, to-do lists, calendar events).</li>
                    </ul>
                </li>
                <li>
                    <strong>Master the Dock:</strong>
                    <ul className="ul">
                        <li>Use the Dock to pin frequently used apps, documents, and folders for quick access.</li>
                    </ul>

                    <figure className='img-21'>
                        <img src="../images/2.3.png" alt="Dock Example" />
                    </figure>
                    <ul className="ul">
                        <li>Open <strong>Launchpad</strong> to view all installed apps. Drag any app from Launchpad to the Dock for easier access.</li>
                        <li>If you want to remove an item from the Dock, simply drag it out.</li>
                        <li>By default, the Downloads folder appears on the Dock&apos;s right side. Drag other documents or folders there for quick access; clicking a document opens it, and clicking a folder expands its contents above the Dock.</li>
                        <li>Right-click a folder in the Dock to sort items or change the view (grid, fan, or list). Drag a document onto a pinned folder to move it.</li>
                        <li>To delete an app or document, drag it into the Trash. The Trash icon also serves as an ejector for external drives.</li>
                    </ul>
                </li>
                <li>
                    <strong>Utilize Drag and Drop:</strong>
                    <ul className="ul">
                        <li>Drag any picture onto the Photos app to import it quickly.</li>
                        <li>Drag a PDF onto the Mail app to instantly attach it to a new email draft.</li>
                    </ul>
                </li>
            </ol>
        </>
    );
}