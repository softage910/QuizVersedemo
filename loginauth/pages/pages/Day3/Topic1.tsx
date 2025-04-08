import '../Day1Module.css';

export default function FirstTopic() {
    return (
        <>
         <h2 className="h2"><strong>Practicing Action Recordings</strong></h2>

            
            <h2 className="h2"><strong>🎯 Goal: Practice clean and simple recordings</strong></h2>
            <p>This short guide will help you get started with making good recordings. These
recordings help train our computer agent to understand how people use
computers.</p>
            <hr />
            <h2 className="h2"><strong>✅ Step-by-Step Instructions</strong></h2>
            <p style={{fontSize:'1.3rem'}}><strong>🧩 Step 1: Install the tools</strong></p>
            <br />
            <p>Download and install the tool called <strong>DuckTrack</strong>. It works with a screen recorder
            called <strong>OBS</strong>.</p>
            
            <a href="https://github.com/TheDuckAI/DuckTrack" target="_blank">                                <button className='Watch-Button'>
                👉 Download DuckTrack
            </button>
            </a>
            
            <p>If you need help setting it up, ask someone from IT.</p>
            <hr />
            <p style={{fontSize:'1.3rem'}}><strong>📄 Step 2: Make your tracking sheet</strong></p>
            <br />
            <p>Make a copy of the task sheet and rename it using your name.</p>
            <br />
            <p>Example:</p>
            <br />
            <p>If your name is Jezz Bezos, your sheet name will be <strong>Jezz Bezos Action
            Recordings.</strong></p>
            <hr />
            <p style={{fontSize:'1.3rem'}}><strong>🎯 Step 3: Your goal for today is 100 good recordings</strong></p>
            <br />
            <p>Try to complete <strong>100 clean, simple recordings</strong> today. These should be short,
            clear, and without mistakes.</p>
            <br />
            <p style={{fontSize:'1.3rem'}}><strong>💡 Tip:</strong></p>
            <br />
            <p>Avoid typos, random mouse movement, and extra clicks. Keep your actions
            smooth and simple.</p>
            <hr />
            <h2 className="h2"><strong>❓FAQs – Common Questions</strong></h2>
            <br />
            <p><strong>I can&apos;t set up OBS or DuckTrack.</strong></p>
            <br />
            <p style={{fontSize:'1.3rem'}}>➡️ No worries! Just contact your IT team. They&apos;ll install everything for you.</p>
            <hr />
            <p><strong>How do I know if my recordings are good?</strong></p>
            <br />
            <p style={{fontSize:'1.3rem'}}>➡️ Check your work before submitting. Ask yourself:</p>
            <br />
            <ul className='ul'>
                <li>Did I avoid typos?</li>
                <li>Did I move the mouse only when needed?</li>
                <li>Was the task done clearly and smoothly?</li>
            </ul>
            <hr />
            <p><strong>I need a phone number to sign in. What should I do?</strong></p>
            <br />
            <p style={{fontSize:'1.3rem'}}>➡️ You can use your own number, or ask your IT team to give you a company
            phone/SIM card.</p>
            <hr />
            <p><strong>I finished all 100 tasks. Where do I upload them?</strong></p>
            <br />
            <p style={{fontSize:'1.3rem'}}>➡️ Upload your videos to your Google Drive (use your work email).</p>
            <br />
            <ul className='ul'>
                <li>Set sharing to &quot;anyone in the organization can view&quot;</li>
                <li>Paste the video links into your Google Sheet under the correct column.</li>
                {/* <li>
  Once you are done with all of your recordings, mail the sheet to { "  "}
  <a href="mailto:onboarding@softage.ai" target="_blank" rel="noopener noreferrer">
    onboarding@softage.ai
  </a>
</li> */}
<li>
  Once you are done with all of your recordings, 📧 mail the sheet to{" "}
  <a
    href="mailto:onboarding@softage.ai"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: "#1d4ed8", // matches your button theme
      color: "#ffffff",
      padding: "6px 12px",
      borderRadius: "6px",
      fontWeight: "600",
      fontSize: "0.95rem",
      textDecoration: "none",
      display: "inline-block",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
      transition: "all 0.25s ease-in-out"
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = "#2563eb";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = "#1d4ed8";
      e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.15)";
    }}
  >
    onboarding@softage.ai
  </a>
</li>



            </ul>
        </>
    );
}