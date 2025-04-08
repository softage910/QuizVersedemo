import '../Day1Module.css';

export default function FourthTopic() {
    return (
        <>
      <h2 className="h2"><strong> Twitter (X) Accounts to Follow</strong></h2>
            <ol className="ol">
                <li>
                <h2 className="h2">Matt Shumer</h2>
                
                <p>
                He regularly tweets about AI tools, tips, and startup insights. If youre
looking for the newest AI releases or interesting applications, hes a good
follow.
                </p>
                <br />
                <a href="https://x.com/mattshumer_" target="_blank">                                <button className='Watch-Button'>
                User Id 
                </button>
                </a>

                </li>
        
                
                <li>
                <h2 className="h2">Andrej Karpathy</h2>
                
                <p>
                A well-known figure in AI, formerly Director of AI at Tesla and currently at
OpenAI. He shares insights on deep learning, research, and the future of AI.
                </p>
                <br />
                <a href="https://x.com/karpathy" target="_blank">                                <button className='Watch-Button'>
                User Id
                </button>
                </a>

                </li>
                
            </ol>
        </>
    );
}