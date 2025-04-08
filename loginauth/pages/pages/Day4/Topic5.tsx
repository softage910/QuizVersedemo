import '../Day1Module.css';
import redirect from '../../public/Images/redirect.png';
import Image from 'next/image';
export default function FifthTopic() {
    return (
        <>
            <h2 className="h2"><strong>Suggested Reading:</strong></h2>

            <h2 className="h2">Igniting Language Intelligence: The Hitchhiker&apos;s Guide From Chain-of Thought Reasoning to Language Agents</h2>


            <p>
                This paper explores how integrating chain-of-thought reasoning can elevate
                the problem-solving capabilities of language models, effectively transforming
                them into more autonomous language agents. It serves as a comprehensive
                guide, detailing the progression from basic reasoning techniques to advanced,
                task-solving agents in modern AI systems.
            </p><br />
            <br />
            <a href="https://arxiv.org/pdf/2311.11797" target="_blank">                                <button className='Watch-Button'>
            Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
            </button>
            </a>

            <br />

            <h2 className="h2">Gemini: A Family of Highly Capable Multimodal Models</h2>


            <p>
                This paper introduces Gemini, a suite of advanced multimodal models that
                seamlessly integrate text and visual information to tackle a diverse range of
                tasks. Experimental evaluations showcase Gemini&apos;s robust performance and
                versatility, marking a significant step forward in the development of capable
                and flexible AI systems.
            </p><br />
            <br />
            <a href="https://arxiv.org/pdf/2312.11805" target="_blank">                                <button className='Watch-Button'>
                Access It Here <Image src={redirect} width={20} height={20} alt="Logo"/>
            </button>
            </a>

        </>
    );
}