import '../Day1Module.css';
import redirect from '../../public/Images/redirect.png';
import Image from 'next/image';

export default function ThirdTopic() {
    return (
        <>
     <h2 className="h2"><strong> News & Updates </strong></h2>
            <ol className="ol">
                <li>
                <h2 className="h2">Data Camp Blog</h2>
                
                <p>
                DataCamps official blog covers data science, machine learning, AI trends,
tutorials, and career tips. Good for practical, how-to articles and news in
the data field.
                </p>
                <br />
                <a href="https://www.datacamp.com/blog" target="_blank">                                <button className='Watch-Button'>
                Reference Material <Image src={redirect} width={20} height={20} alt="Logo"/>
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
                <br />
                <a href="https://www.therundown.ai/" target="_blank">                                <button className='Watch-Button'>
                Reference Material <Image src={redirect} width={20} height={20} alt="Logo"/>
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
                <br />
                <a href="https://aibreakfast.beehiiv.com/" target="_blank">                                <button className='Watch-Button'>
                Reference Material <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
            </ol>
        </>
    );
}