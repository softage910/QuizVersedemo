import '../Day1Module.css';
import redirect from '../../public/Images/redirect.png';
import Image from 'next/image';
export default function SeventhTopic() {
    return (
        <>
            <h2 className="h2"><strong>OpenAI Operator</strong></h2>



            <p>
                OpenAI unveils a new tool that leverages advanced language models to directly
                control and interact with computer systems using natural language. By
                translating high-level instructions into precise actions, Operator aims to simplify
                complex workflows and usher in a new era of intuitive, AI-powered humancomputer interaction.
            </p><br />
            <br />
            <ol className="ol">
                <li>   <a href="https://openai.com/index/introducing-operator/" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo" />
                </button>
                </a></li>
                <br />
                <br />
                <li>
                <a href="https://www.youtube.com/watch?v=gYqs-wUKZsM" target="_blank">                                <button className='Watch-Button'>
                    Access It Here <Image src={redirect} width={20} height={20} alt="Logo" />
                </button>
                </a>
                </li>
                <br />
                <br />
                <li>
                <a href="https://www.youtube.com/watch?v=CSE77wAdDLg" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>
                </li>

            </ol>


            <br />



        </>
    );
}