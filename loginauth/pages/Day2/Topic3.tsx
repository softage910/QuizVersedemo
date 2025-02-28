import '../Day1Module.css';



export default function ThirdTopic() {
    return (
        <>

            <h2 className="h2">Level 2: Window Management and Multitasking</h2>
            <ol className="ol">
                <li>
                    <strong>Understanding Window Controls:</strong>
                    <figure>

                        <img src="../images/2.4.png" alt="Window Controls Example" />
                    </figure>
                    <ul className="ul">
                        <li><strong>Red button:</strong> Closes the current window without quitting the app.</li>
                        <li><strong>Yellow button:</strong> Minimizes the window to the dock.</li>
                        <li><strong>Green button:</strong> Enters full-screen mode (hiding the Dock and menu bar). Press <strong>Esc</strong> or hover at the screen edge to exit.</li>
                        <li>To quit an app, choose <strong>Quit</strong> from the menu bar or press <strong>Command + Q</strong>. Press <strong>Command + W</strong> to close only the current window.</li>
                    </ul>
                </li>
                <li>
                    <strong>Multitasking Features:</strong>
                    <ul className="ul">
                        <li><strong>Command + Tab:</strong> Switch between open apps. Use <strong>Command + ` (backtick)</strong> to cycle through windows of the same app.</li>
                        <li><strong>Mission Control:</strong> Press <strong>F3</strong> or swipe up with three fingers on the trackpad to view all open windows.</li>
                        <li><strong>Tiling Windows:</strong> Hover over the green button and select tiling options to arrange two windows side by side. Hold the <strong>Option key</strong> while hovering over the green button to snap the window to the left or right of the desktop.</li>
                    </ul>
                </li>
            </ol>
        </>
    );
}