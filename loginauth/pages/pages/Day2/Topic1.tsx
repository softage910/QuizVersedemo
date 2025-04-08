import '../Day1Module.css';

export default function FirstTopic() {
    return (
        <>
            <h2 className="h2"><strong>Objective: Gaining Proficiency in Mac OS</strong></h2>
            <p>
                <strong>ACE is tailored to the MAC ecosystem. Hence, the first and foremost objective of your training would be to master working on Mac OS. The initial focus here will be on familiarizing yourself with the subtle differences between Mac OS and other operating systems, especially Microsoft Windows. This foundation will ensure a smoother transition and enhance your productivity, and also help you understand the unique features and workflows in Mac OS easily.</strong>
            </p>
            <hr />

            <h3 className="h3">Watch this Mac tutorial for beginners to get started:</h3>
     
            <p>

                <div className='VideoFrame'>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3jeeFc2Vo1U?si=iXr1hQi2NVVyfN96"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </p>
            <p><strong>It covers the menu bar, Dock, Finder, window management, and useful tips.</strong></p>
            <p>Use these instructions to learn the basics first, then progress through four increasingly advanced levels.</p>

        </>
    );
}
