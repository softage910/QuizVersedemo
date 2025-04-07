import '../Day1Module.css';
import redirect from '../../public/Images/redirect.png';
import Image from 'next/image';

export default function SecondTopic() {
    return (
        <>


            <h2 className="h2"><strong> Understanding How ML Works </strong></h2>
            <ul className="ul">
                <li>
                <h2 className="h2">Machine Learning is Fun!</h2>
                
                
                <p>
                A beginner-friendly blog that explains machine learning concepts in a clear,
                approachable way.
                </p>
                <br />
                <br />
                
                <a href="https://www.machinelearningisfun.com/" target="_blank">                                <button className='Watch-Button'>
                Reference Material <Image src={redirect} width={20} height={20} alt="Logo"/>
                </button>
                </a>

                </li>
            </ul>

        </>
    );
}