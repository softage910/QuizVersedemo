import '../Day1Module.css';

export default function FirstTopic() {
    return (
        <>
            <h2 className="h2"><strong>Objective : Practice clean, optimal recordings.</strong></h2>

            <br />

            <ol className='ol'>
                <li>Download and install DuckTrack and set it up with OBS.
                    <br />
                    Visit the GitHub repository for DuckTrack:</li>
                <br />
                {/* <div className="TestPage-Logo">
                    <Image src=""/>
            </div> */}
                <a href="https://github.com/TheDuckAI/DuckTrack">
                    <button style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px 24px",
                        backgroundColor: "white",
                        color: "black",
                        fontSize: "16px",
                        textDecoration: "none",
                        borderRadius: "30px",
                        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.3s ease-in-out",
                        cursor: "pointer",

                    }} className="git-but">
                        GitHub Link
                    </button>

                </a>
                <br />
                <br />

                <li>Make a copy of this sheet, and rename it with your name, like [first_name]_[last_name]
                    Action Recordings. If your name is Jezz Bezos, the sheet will be named Jeff Bezos Action
                    Recordings</li>
                <br />
                {/* <div className="TestPage-Logo">
                    <Image src=""/>
            </div> */}
                

                <li>Target for the day: 100 clean recordings.</li>
                <br />
                {/* <div className="TestPage-Logo">
                    <Image src=""/>
            </div> */}
                <br />

            </ol>
        </>
    );
}