import '../Day1Module.css';

export default function FifthTopic() {
    return (
        <>
      <h2 className="h2"><strong> YouTube Channels</strong></h2>
            <ol className="ol">
                <li>
                <h2 className="h2">AI Advantage</h2>
                
                <p>
                A YouTube channel focusing on AI tutorials, demonstrations of AI tools, and
breakdowns of how AI technologies work. Good if you enjoy video-based
learning.
                </p>
                <br />
                <a href="https://www.youtube.com/@aiadvantage/videos" target="_blank">                                <button className='Watch-Button'>
                Reference Video
                </button>
                </a>

                </li>
        
                
                <li>
                <h2 className="h2">IBM Technology</h2>
                
                <p>
                IBMs official tech channel. They have videos on AI, cloud computing,
quantum computing, and more. Youll find interviews, demos, and
discussions of enterprise-level AI solutions.
                </p>
                <br />
                <a href="https://x.com/karpathy" target="_blank">                                <button className='Watch-Button'>
                Reference Video
                </button>
                </a>

                </li>
                
            </ol>
        </>
    );
}