import '../Day1Module.css';
import redirect from '../../public/Images/redirect.png';
import Image from "next/image";

export default function FirstTopic() {
    return (
        <>


            <h2 className="h2"><strong>Suggested services to follow to
                keep up with advances in
                AI/ML world!</strong></h2>
            <p>
            A collection of resources for learning about, staying updated on, and
            discussing AI and machine learning.
            </p><br />
            <h2 className="h2"><strong> Understanding How ML Works </strong></h2>
            <ul className="ul">
                <li>
                <h2 className="h2">Machine Learning is Fun!</h2>
                
                
                <p>
                A beginner-friendly blog that explains machine learning concepts in a clear,
                approachable way.
                </p>
                
                
                
                <a href="https://www.machinelearningisfun.com/" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
            </ul>
            <br />
            <h2 className="h2"><strong> News & Updates </strong></h2>
            <ol className="ol">
                <li>
                <h2 className="h2">Data Camp Blog</h2>
                
                <p>
                DataCamps official blog covers data science, machine learning, AI trends,
tutorials, and career tips. Good for practical, how-to articles and news in
the data field.
                </p>
            
                <a href="https://www.datacamp.com/blog" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
        
                
                <li>
                <h2 className="h2">The Rundown</h2>
                
                <p>
                A newsletter and site that provides quick, digestible updates on AI news.
They often highlight the weeks biggest stories, tools, and developments in
AI. You can subscribe for free to get these updates in your inbox.
                </p>
                
                <a href="https://www.therundown.ai/" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
                <li>
                <h2 className="h2">AI Breakfast</h2>
                <p>
                Another newsletter option (hosted on Beehiiv) that curates the latest AI
news and insights. Its designed to be a quick morning read to keep you
informed about recent developments, product launches, and research in AI.
                </p>
            
                <a href="https://aibreakfast.beehiiv.com/" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
            </ol>
            <br />
            <h2 className="h2"><strong> Twitter (X) Accounts to Follow</strong></h2>
            <ol className="ol">
                <li>
                <h2 className="h2">Matt Shumer</h2>
                
                <p>
                He regularly tweets about AI tools, tips, and startup insights. If youre
looking for the newest AI releases or interesting applications, hes a good
follow.
                </p>
                
                <a href="https://x.com/mattshumer_" target="_blank">                                <button className='Watch-Button'>
                User Id <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
        
                
                <li>
                <h2 className="h2">Andrej Karpathy</h2>
                
                <p>
                A well-known figure in AI, formerly Director of AI at Tesla and currently at
OpenAI. He shares insights on deep learning, research, and the future of AI.
                </p>
                
                <a href="https://x.com/karpathy" target="_blank">                                <button className='Watch-Button'>
                User Id <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
                
            </ol>
            <br />
            <h2 className="h2"><strong> YouTube Channels</strong></h2>
            <ol className="ol">
                <li>
                <h2 className="h2">AI Advantage</h2>
                
                <p>
                A YouTube channel focusing on AI tutorials, demonstrations of AI tools, and
breakdowns of how AI technologies work. Good if you enjoy video-based
learning.
                </p>
                
                <a href="https://www.youtube.com/@aiadvantage/videos" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
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
                
                <a href="https://x.com/karpathy" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
                
            </ol>
            <br />
            <h2 className="h2"><strong> How to Use Them</strong></h2>
            <ol className="ol">
                <li>
                    <h2 className="h2">Learn The Fundamentals:</h2>

                    <p>
                        Start with &quot;Machine Learning&quot; is Fun! to
                        understand the core concepts in a beginner-friendly way.
                    </p>


                </li>


                <li>
                    <h2 className="h2">Stay Updated:</h2>

                    <p>
                        Subscribe to newsletters like The Rundown and AI Breakfast,
                        and check out the DataCamp blog to keep on top of industry news and
                        practical tutorials.
                    </p>


                </li>


                <li>
                    <h2 className="h2">Engage on social media:</h2>

                    <p>
                        Follow Matt Shumer and Andrej Karpathy on
                        Twitter X for daily insights, tips, and the latest AI chatter.
                    </p>


                </li>


                <li>
                    <h2 className="h2">Watch demos and tutorials:</h2>

                    <p>
                        Use AI Advantage and IBM Technology on
                        YouTube to see real examples, demos, and deeper tech dives.
                    </p>


                </li>

            </ol>

        

        
        </>
    );
}