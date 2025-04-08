import '../Day1Module.css';

export default function FirstTopic() {
    return (
        <>
            <h2 className="h2"><strong>Prompting Techniques for AI Models</strong></h2>
            <p>
                Prompting is the art and science of crafting input queries to steer the behavior
                of AI models toward desired outputs. As AI models have evolved in scale and
                capability, so too have prompting strategies—progressing from simple
                questions to sophisticated multi-step prompt engineering methods that
                enhance reasoning, creativity, factuality, and control.
                This write-up explores advanced prompting techniques designed to unlock
                the full potential of modern AI models.
            </p>
            <hr />
            <h2 className="h2"><strong>🧠 1. Understanding the Prompting Paradigm</strong></h2>
            <p>At its core, a prompt is a piece of text (instruction, question, dialogue, etc.) that
                conditions the model&apos;s response. Due to their architecture, many advanced AI
                models generate output token-by-token based on prior context (the prompt).
                This behavior gives rise to complex prompting dynamics where small changes
                in phrasing, structure, or sequencing can lead to dramatically different outputs.</p>
            <hr />
            <h2 className="h2"><strong>🔧 2. Key Prompting Techniques</strong></h2>

            <p style={{fontSize:'1.3rem'}}>A. Few-Shot Prompting</p>
            <br />
            <p><strong>Definition:</strong> Providing a few (2–5) examples of input-output pairs in the prompt
            to guide the model’s behavior.</p>
            <br />
            <p><strong>Use Case:</strong> Tasks like summarization, classification, formatting, and translation.</p>
            <br />
            <p><strong>Best Practices:</strong></p>
            <br />
            <ul className='ul'>
                <li>Keep examples consistent in format.</li>
                <li>Use high-quality, unambiguous examples.</li>
                <li>Match the domain of the target query.</li>
            </ul>
<hr />        <p style={{fontSize:'1.3rem'}}>B. Chain-of-Thought (CoT) Prompting</p>
        <br />
        <p><strong>Definition:</strong> Encouraging the model to reason through multi-step problems by
        showing intermediate steps in the examples.</p>
        <br />
        <p><strong>Use Case:</strong>  Math word problems, logical reasoning, programming.</p>
        <br />
        <p><strong>Variants:</strong></p>
        <br />
        <ul className='ul'>
            <li><strong>Zero-shot CoT:</strong> Add &quot;Let&apos;s think step-by-step&quot; to the prompt.</li>
            <li><strong>Multi-turn CoT:</strong> Use dialogue style to model reasoning through back-and-forth.</li>
        </ul>
        <hr />

        <p style={{fontSize:'1.3rem'}}>C. Self-Consistency Prompting</p>
        <br />
        <p><strong>Definition:</strong> Generate multiple reasoning paths (with CoT) and pick the most
        common answer.</p>
        <br />
        <p><strong>Use Case:</strong> Improving reliability in reasoning tasks.</p>
        <br />
        <p><strong>Technique:</strong></p>
        <br />
        <ol className='ol'>
            <li>Prompt the model multiple times with CoT.</li>
            <li>Sample outputs.</li>
            <li>Use majority voting to choose the final answer.</li>

        </ol>
        <br />
        <p><strong>Why It Works:</strong> AI models can be probabilistic and inconsistent. Averaging
        reasoning paths filters out noise.</p>
        <hr />
        <p style={{fontSize:'1.3rem'}}>D. ReAct (Reasoning + Acting) Prompting</p>
        <br />
        <p><strong>Definition:</strong> Combine CoT reasoning with tool use by interleaving thoughts and
        actions.</p>
        <br />
        <p><strong>Use Case:</strong>When AI models interact with tools (search APIs, calculators,
            knowledge bases).</p>
        <br />
        <p><strong>Notes:</strong></p>
        <br />
        <ol className='ol'>
            <li>Requires backend capable of executing actions (e.g., LangChain, function
                calling).</li>
            <li>Encourages structured thought-tool loops.</li>

        </ol>
        <hr />
        <p style={{fontSize:'1.3rem'}}>E. Contrastive Prompting</p>
        <br />
        <p><style>Definition:</style> Provide side-by-side examples of good vs. bad responses to clarify
        desired behavior.</p>
        <br />
        <p><strong>Use Case:</strong> Alignment, toxicity control, style imitation.</p>
        <hr />
        <p style={{fontSize:'1.3rem'}}>F. Instruction-Tuning Style Prompting</p>
        <br />
        <p><strong>Definition:</strong> Mirror the structure of instruction-tuned datasets to get aligned
        outputs.</p>
        <br />
        <p><strong>Why It Works:</strong> Aligns with formats the AI model may have been trained on,
        improving its ability to follow instructions.</p>
        <hr />
        <p style={{fontSize:'1.3rem'}}>G. Prompt Chaining (Modular Prompting)</p>
        <br />
        <p><strong>Definition:</strong> Break a complex task into smaller steps with separate prompts;
        chain outputs together.</p>
        <br />
        <p><strong>Use Case:</strong> Structured workflows, content pipelines, multi-step generation.</p>
        <br />
        <p><strong>Example Flow:</strong></p>
        <br />
        <ol className='ol'>
            <li>Prompt 1: Summarize an article.</li>
            <li>Prompt 2: Turn summary into key bullet points.</li>
            <li>Prompt 3: Turn bullet points into a slide deck outline.</li>

        </ol>
        <br />
        <p>This technique is commonly used in orchestration frameworks like LangChain.</p>
        <hr />
        <p style={{fontSize:'1.3rem'}}>H. Tree-of-Thoughts (ToT) Prompting</p>
        <br />
        <p><strong>Definition:</strong> Let the model generate multiple possible reasoning paths and
        evaluate them before deciding on the final answer.</p>
        <br />
        <p><strong>Use Case:</strong> Strategic reasoning, puzzles, planning tasks.</p>
        <p><strong>How it works:</strong></p>
        <br />
        <ul className='ul'>
            <li>Generate &quot;branches&quot; of thoughts.</li>
            <li>Score or evaluate paths.</li>
            <li>Pick the most promising one.</li>
        </ul>
        <br />
        <p><strong>Bonus:</strong> Can be combined with voting or self-evaluation prompts.</p>
        <hr />
        <h2 className="h2"><strong>🧪 3. Advanced Prompt Crafting Tips</strong></h2>
        <br />
        <ul className='ul'>
            <li>Use delimiters (e.g., triple quotes, markdown) to reduce ambiguity and
            separate input/output.</li>
            <li>Be explicit: Say what you want (e.g., &quot;Answer in 3 bullet points&quot; or &quot;Explain
                like I&apos;m 5&quot;).</li>
            <li>Control length using examples, instructions, or token limits.</li>
            <li>Give the model a role: e.g., &quot;You are a helpful legal advisor.&quot; This can affect
            tone and content.</li>
            <li>Try temperature and top_p tuning in API settings to balance creativity vs.
            consistency.</li>
        </ul>
        <hr />
        <h2 className="h2"><strong>🧱 4. Structuring for Precision</strong></h2>
        <p>Well-structured prompts are often:</p>
        <br />
        <ul className='ul'>
            <li><strong>Instructional:</strong> Start with &quot;Your task is to…&quot;</li>
            <li><strong>Contextualized:</strong> Provide relevant background.</li>
            <li><strong>Formatted:</strong> Use lists, headers, or Q&A to guide output shape.</li>
            <li><strong>Constrained:</strong> Limit scope with rules or examples.</li>
        </ul>
        <hr />
        <h2 className='h2'><strong>🔄 5. Iteration & Prompt Debugging</strong></h2>
        <br />
        <p>Prompting is an iterative process. To debug a prompt:</p>
        <br />
        <ul className='ul'>
            <li>Compare good and bad outputs.</li>
            <li>Isolate variables by changing one part at a time.</li>
            <li>Try simplifying overly complex inputs.</li>
            <li>Ask the model why it made certain choices.</li>
        </ul>
        <hr />
        <h2 className='h2'><strong>🧭 6. Real-World Applications of Advanced
        Prompting</strong></h2>
        <br />
        <ul className='ul'>
            <li><strong>Enterprise QA systems:</strong> Chain-of-thought + retrieval augmentation.</li>
            <li><strong>Creative writing:</strong> Prompt chaining + few-shot with style samples.</li>
            <li><strong>Code generation:</strong> Role-based + instruction format + CoT for logic.</li>
            <li><strong>Data cleaning:</strong> Zero-shot classification with contrastive feedback.</li>
            <li><strong>Customer support:</strong> ReAct-style prompts with external databases or tools.</li>
        </ul>
        <hr />
        <h2 className='h2'><strong>🔚 Conclusion</strong></h2>
        <br />
        <p>Prompt engineering is an essential and ever-evolving discipline in the era of
advanced AI models. By mastering techniques like chain-of-thought, ReAct,
few-shot, and structured chaining, practitioners can extract significantly more
value, control, and insight from AI systems.
Whether you&apos;re building tools, writing assistants, research analyzers, or
creative generators, <strong>your prompts are your interface—and the better your
interface, the better your results.</strong></p>












        </>
    );
}
