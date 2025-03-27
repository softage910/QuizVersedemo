import '../Day1Module.css';
import redirect from '../../public/Images/redirect.png';
import Image from 'next/image';

export default function SixthTopic() {
    return (
        <>
            <h2 className="h2"><strong>Articles and videos about computer use agents:</strong></h2>

            <h2 className="h2">Claude Computer Use</h2>


            <p>
                Claude language model can be integrated into computer systems to
                streamline user interactions and automate tasks. By leveraging natural
                language processing for real-world computing challenges, it demonstrates
                enhanced efficiency and intuitive system control.
            </p><br />
            <br />
            <ol className="ol">
                <li>
                    <a href="https://www.anthropic.com/news/3-5-models-and-computer-use" target="_blank">                                <button className='Watch-Button'>
                        Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                    </button>
                    </a>
                    <br />
                    <br />
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=ODaHJzOyVCQ" target="_blank">                                <button className='Watch-Button'>
                        Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                    </button>
                    </a>
                </li>
            </ol>







        </>
    );
}