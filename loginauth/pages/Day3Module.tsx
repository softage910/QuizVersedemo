"use client";

import './Day3Module.css';


export default function Day3Module() {
  return (
    <>
      <header>
        <h1>Day 3: Prompting Mastery</h1>
      </header>

      <main>
        <h2>Objective: Mastering Prompt Creation</h2>
        <hr />
        <h2>Training Module: Crafting Actionable Prompts for Computer Agents</h2>
        <p>
          Welcome to the AI-Operations team training on prompt generation at SoftAge Information Technology Limited! This module will guide you through the essentials of writing clear, effective, and executable prompts for computer use agents. Follow these guidelines and complete the exercises to refine your prompt-writing skills.
        </p>
        <hr />
        <h2>Understanding Prompts for Computer Use Agents</h2>
        <h3>Definition and Purpose</h3>
        <p>
          Prompts designed for computer use agents are the digital equivalent of clear, concise instructions given to a highly skilled personal assistant. These prompts serve as the bridge between human intent and AI execution, enabling seamless automation of tasks across various digital platforms.
        </p>
        <p>
          <strong>Key aspects of computer use agent prompts:</strong>
          <ul>
            <li><strong>Task-oriented</strong>: Each prompt is focused on accomplishing a specific, actionable task.</li>
            <li><strong>Precise language</strong>: Uses clear, direct language and action verbs (e.g., “schedule,” “send,” “organize”) to avoid misinterpretation.</li>
            <li><strong>Context-aware</strong>: Includes the necessary environmental or situational details (tools, timelines, platforms).</li>
            <li><strong>Parameter-driven</strong>: Specifies required inputs, constraints, or conditions for task execution (time limits, formats, priorities).</li>
            <li><strong>Platform-specific</strong>: Tailored to work within the confines and capabilities of particular software systems or tools.</li>
          </ul>
        </p>
        <h3>Basic Prompt Structure</h3>
        <p>
          [Action Verb] + [Task Object] + [Location/Platform] + [Timing] + [Additional Parameters]
        </p>
        <h3>Key Prompt Element</h3>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Intention</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Action</td>
              <td>Clearly define the task to be performed</td>
              <td>"Send a payment reminder email…”</td>
            </tr>
            <tr>
              <td>Context</td>
              <td>Provide relevant environmental or situational information</td>
              <td>"...using HubSpot templates, targeting overdue invoices &gt;30 days”</td>
            </tr>
            <tr>
              <td>Constraints</td>
              <td>Specify any limitations or requirements</td>
              <td>"Exclude clients with pending disputes; flag accounts &gt;60 days overdue”</td>
            </tr>
          </tbody>
        </table>

        <h3>Examples by Task Type</h3>
        <p>
          <strong>Scheduling</strong><br />
          <em>Good</em>: “schedule a team meeting for next tuesday at 2 pm on Zoom.”<br />
          <em>Bad</em>: “Set up a meeting on Zoom.”
        </p>
        <p>
          <strong>Reminders</strong><br />
          <em>Good</em>: “remind me to call mom tomorrow at 6 pm.”<br />
          <em>Bad</em>: “remind me about the call later.”
        </p>
        <p>
          <strong>File Management</strong><br />
          <em>Good</em>: “move all pdf files from downloads folder to work documents folder.”<br />
          <em>Bad</em>: “organize all of my files.”
        </p>
        <p>
          <strong>Emails</strong><br />
          <em>Good</em>: “send a thank you email to matthewjohn09@gmail.com for the dolphin project proposal.”<br />
          <em>Bad</em>: “email John about about the proposal.”
        </p>
        <p>
          <strong>Social Media</strong><br />
          <em>Good</em>: "post the image 'DSC0047.jpg' on our facebook page at 3 pm with the caption 'New product alert!'"<br />
          <em>Bad</em>: "put the image on social media about the product."
        </p>

        <hr />
        <h3>Best Practices</h3>
        <p>
          <strong>Do’s:</strong>
          <ul>
            <li>Use simple, natural and conversational prompts.</li>
            <li>Use tool-specific jargons and syntax (e.g., @mention in Slack, #tags in Asana).</li>
            <li>Name files or folders exactly: “Q4_Report.docx” not just “the report”.</li>
          </ul>
        </p>
        <p>
          <strong>Don’t’s:</strong>
          <ul>
            <li>Avoid vague terms: ❌ “Handle files sometime today” → ✅ “Move *.csv files to Backup folder by 5 PM”.</li>
            <li>Do not overload single prompts; split “Schedule meeting AND draft report” into separate tasks.</li>
            <li>Avoid assuming the agent knows context without specifying.</li>
          </ul>
        </p>

        <h3>Use Cases</h3>
        <p>
          Use cases demonstrate the practical application of action agents in real-world situations, highlighting their ability to interpret instructions, process relevant data, and execute actions to achieve desired outcomes efficiently and accurately.
        </p>
        <p>
          The concept of use cases for action agents is inherently fluid and multifaceted and constantly evolving. Instead of fitting into predefined categories, their applications are better understood as a spectrum of possibilities driven by the specific problems they are designed to solve.
        </p>
        <p>
          Essentially, a use case for an action agent emerges from the intersection of its capabilities—perception, decision-making, and action—with a particular domain’s needs and constraints. This means that the same underlying principles of autonomous action can manifest in vastly different ways depending on the context.
        </p>

        <h3>What Action Agents Do</h3>
        <p>
          At their core, action agents are about enabling AI to do things, not just provide information. This means they can:
          <ul>
            <li>Interact with the real world through software or physical actions.</li>
            <li>Make decisions based on their understanding of the environment and their goals.</li>
            <li>Learn and adapt over time by analyzing the results of their actions.</li>
          </ul>
        </p>

        <h3>Contextual vs. Non-contextual Actions</h3>
        <p>
          <strong>Key Difference:</strong>
          <ul>
            <li><strong>Contextual actions:</strong> Specific to the current item or situation, offering options directly related to what is selected.</li>
            <li><strong>Non-contextual actions:</strong> Generic and consistent across different contexts, providing standard functionality.</li>
          </ul>
        </p>

        <p>
          <strong>Example of Contextual Actions:</strong> Right-clicking on a file shows options like “open,” “rename”, or “delete”.<br />
          <strong>Example of Non-contextual Actions:</strong> Showing the help menu or opening settings.
        </p>

        <h3>Additional Reading Materials</h3>
        <p>
          <a href="https://www.grammarly.com/blog/ai/generative-ai-prompts/" target="_blank">Generative AI Prompts</a><br />
          <a href="https://www.datacamp.com/blog/operator" target="_blank">OpenAI Operator</a>
        </p>

        <h3>Some Examples of Good, Actionable Prompts</h3>
        <p>
          <a href="https://docs.google.com/spreadsheets/d/1oJ1FUSVf1Hvmy_VBil5WJNJ_tNpWqQ7qSQFLJ05cPSk/edit?gid=1738457627#gid=1738457627" target="_blank">
            Click here for examples</a>
        </p>

        <hr />
        <h3>Best Practices Recap</h3>
        <p>
          Remember: Use simple, clear, and context-aware language to craft your prompts. Your goal is to ensure that the computer use agent receives unambiguous instructions that lead to the desired outcome.
        </p>
      </main>

    </>
  );
}