import '../Day1Module.css';



export default function FourthTopic() {
    return (
        <>
            <h2 className="h2">Level 3: Mastering the Finder</h2>
            <ol className="ol">
                <li>
                    <strong>Understanding the Finder:</strong>
                    <ul className="ul">
                        <li><strong>Finder:</strong> Your portal to all files and folders on your Mac, from wallpapers to downloaded media.</li>
                        <li><strong>Your Mac&apos;s user folder:</strong> Contains predefined sections (Pictures, Downloads, Applications) and usually personal folders within <strong>Documents</strong>.</li>
                    </ul>
                </li>
                <li>
                    <strong>Viewing and Organizing Files:</strong>
                    <ul className="ul">
                        <li>Use the toolbar in any Finder window to toggle between <strong>Icon, List, Column,</strong> and <strong>Gallery</strong> views. For beginners, the column view is recommended.</li>
                        <li>Open new Finder windows with <strong>Command + N</strong> and drag files between windows.</li>
                    </ul>
                </li>
                <li>
                    <strong>Moving Files:</strong>
                    <ul className="ul">
                        <li>macOS doesn&apos;t support cutting files with <strong>Command + X</strong>; you can move files by copying them and then pressing <strong>Option + Command + V</strong> to paste them in the new location.</li>
                    </ul>
                </li>
                <li>
                    <strong>Enhancing the Finder Experience:</strong>
                    <ul className="ul">
                        <li><strong>Tabs:</strong> Turn on the tab bar (via the View menu) to manage multiple Finder views in one window.</li>
                        <li><strong>Path Bar:</strong> Enable this in the View menu to display the current folder path at the bottom of the Finder window.</li>
                        <li><strong>Sidebar Customization:</strong> Uncheck unneeded folders and drag frequently used folders into the Favorites section.</li>
                        <li><strong>Preview:</strong> Select &quot;Show Preview&quot; in the View menu for a file preview and extra details.</li>
                    </ul>
                </li>
            </ol>
        </>
    );
}