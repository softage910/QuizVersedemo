import '../Day1Module.css';

export default function SecondTopic() {
    return (
        <>
            <h2 className="h2"><strong>Research Papers and Current
            Market Position</strong></h2>
            <br />
            <h2 className='h2'><strong>🎯 Goal: Learn What Action Agents Are</strong></h2>
            
            <p>Recommended Reading Materials explaining the concepts of Action Agents.
            Don&apos;t rush. This is about learning the basics, not finishing fast.</p>
            <hr />
            <h2 className='h2'><strong>🧑‍💻 What&apos;s an &quot;Action Agent&quot;?</strong></h2>
            
            <p>An action agent is just an AI that can use a computer for you.</p>
            <br />
            <p>You tell it what to do in plain English, and it does it — like clicking buttons,
            typing things, or opening files.</p>
            <br />
            <p>These agents can help with:</p>
            <br />
            <ul className='ul'>
                <li>Searching the web</li>
                <li>Booking flights</li>
                <li>Filling out forms</li>
                <li>Doing simple work tasks</li>
            </ul>
            <br />
            <p>The goal is to make computers easier to use — just by telling the agent what
            you want.</p>
<hr />
            <h2 className='h2'><strong>📚 Simple Readings to Help You Understand</strong></h2>
            <p>These research papers show how agents are built and tested. Try reading one
            at a time.</p>
            <hr />
            <p style={{fontSize:'1.3rem'}}>🖱 1. GUI Agent (Claude 3.5)</p>
            <br />
            <p>This one talks about an AI agent that can control your computer like a person —
            clicking, typing, etc.</p>
            
            <a href="https://arxiv.org/pdf/2411.10323" target="_blank">                                <button className='Watch-Button'>
                    Read Here
                </button>
            </a>
            <hr />
            <p style={{fontSize:'1.3rem'}}>🌐 2. Web Arena</p>
            <br />
            <p>This one shows a fake internet (a &quot;web environment&quot;) where agents can
            practice using websites.</p>
            
            <a href="https://arxiv.org/pdf/2307.13854" target="_blank">                                <button className='Watch-Button'>
                    Read Here
                </button>
            </a>
            <hr />
            <p style={{fontSize:'1.3rem'}}>🧠 3. WorkArena</p>
            <br />
            <p>This one looks at how well agents do real work — like searching for info or
            solving problems.</p>
            
            <a href="https://arxiv.org/pdf/2403.07718" target="_blank">                                <button className='Watch-Button'>
                    Read Here
                </button>
            </a>
            <hr />
            <p style={{fontSize:'1.3rem'}}>👀 Want to Read More?</p>
            <br />
            <p>Here are two more papers if you&apos;re curious:</p>
            <br />
            <ul className='ul'>
                <li>      <a href="https://arxiv.org/pdf/2311.11797" target="_blank">                                <button className='Watch-Button'>
                How AI can think step by step (chain-of-thought)
                </button>
            </a></li>
                <li>
                <a href="https://arxiv.org/pdf/2312.11805" target="_blank">                                <button className='Watch-Button'>
                Gemini: An AI that uses both pictures and text
                </button>
            </a>
                    
                </li>
            </ul>
            <hr />
            <p style={{fontSize:'1.3rem'}}>📰 Articles & Videos to Watch</p>
            <br />
            <p style={{fontSize:'1.1rem'}}>Claude Using a Computer</p>
            
            <ul className='ul'>
                <li>        <a href="https://www.anthropic.com/news/3-5-models-and-computer-use" target="_blank">                                <button className='Watch-Button'>
                Read the article
                </button>
            </a></li>
                <li>
                <a href="https://www.youtube.com/watch?v=ODaHJzOyVCQ" target="_blank">                                <button className='Watch-Button'>
                Watch The Video
                </button>
            </a>

                </li>
             

            </ul>
            <br />
            <p style={{fontSize:'1.1rem'}}>OpenAI Operator (Another Computer Agent)</p>
            <br />
            <ul className='ul'>
                <li>       <a href="https://openai.com/index/introducing-operator/" target="_blank">                                <button className='Watch-Button'>
            Read the article
                </button>
            </a></li>
            <li>
            <a href="https://www.youtube.com/watch?v=gYqs-wUKZsM" target="_blank">                                <button className='Watch-Button'>
            Watch the video
                </button>
            </a>

            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=CSE77wAdDLg" target="_blank">                                <button className='Watch-Button'>
            Another video
                </button>
            </a>

            </li>
     
            </ul>
            <hr />
            <p style={{fontSize:'1.3rem'}}>✅ TL;DR</p>
            <br />
            <ul className='ul'>
                <li>Action agents are AIs that can use a computer for you.</li>
                <li>You tell them what to do with plain instructions.</li>
                <li>Read or watch the stuff above — one piece at a time.</li>
                <li>You don&apos;t need to understand everything at once.</li>
            </ul>




        


            
        </>
    );
}