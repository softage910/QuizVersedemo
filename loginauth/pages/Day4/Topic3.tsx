import '../Day1Module.css';
import redirect from '../../public/Images/redirect.png';
import Image from 'next/image';

export default function ThirdTopic() {
    return (
        <>
            <h2 className="h2">Web Arena: A Realistic Web Environment For
                Building Autonomous Agents</h2>


            <p>
                This paper introduces WEB ARENA, a simulation environment that mirrors
                realistic web interactions for the development and evaluation of autonomous
                agents. It provides a robust platform where agents can be trained, tested, and
                benchmarked against dynamic, real-world-like web challenges.
            </p><br />

            <ol className="ol">


                <li>
                    <a href="https://arxiv.org/pdf/2307.13854" target="_blank">                                <button className='Watch-Button'>
                    Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
                    </button>
                    </a>
                </li>

                {/* <li>
                    <a href="https://www.notion.so/WebArena-Assessment-196a062d1cd280b1b0acd8d3a2ad937c?pvs=21" target="_blank">                                <button className='Watch-Button'>
                        WebArena-Assessment
                    </button>
                    </a>

                </li>
                <li>
                    <a href="https://www.notion.so/WebArena-Answers-196a062d1cd2807a84c5d59a0ae7b033?pvs=21" target="_blank">                                <button className='Watch-Button'>
                        WebArena-Answers
                    </button>
                    </a>

                </li> */}

            </ol>



        </>
    );
}