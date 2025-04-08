import '../Day1Module.css';

export default function SixTopic() {
    return (
        <>
            <h2 className="h2"><strong>Tagging Your Recordings</strong></h2>
            <br />
            <ol className='ol'>
                <li>
                    Each tool you work with will be labeled with a tag in the format &quot;tool-
                    (tool_name)&quot;, and the tasks you perform will be tagged as &quot;op-
                    (tool_name)-(feature_name)&quot;. For example:
                    <br />
                    <br />
                    <ul className='ul'>
                        <li>
                            If you&apos;re recording a task using the Background Removal Tool in Adobe
                            Photoshop, the tags would be &quot;tool-ps&quot; and &quot;op-ps-backgroundremoval&quot;.
                        </li>
                        <li>
                            For a task like Formatting in Google Sheets, the tags would be &quot;toolsheets&quot; and &quot;op-sheets-formatting&quot;.
                        </li>

                    </ul>
                </li>
                <li>
                    Multiple Tags per Tool : A single tool may have numerous tags based on its features. For instance, if
                    a tool has 85 features, there will be 85 unique tags representing each
                    feature.

                </li>


                <li>
                    Refer to Introduction to Fluxe.pdf to understand the process of choosing
                    tags in Fluxe.
                </li>

            </ol>
        </>
    );
}