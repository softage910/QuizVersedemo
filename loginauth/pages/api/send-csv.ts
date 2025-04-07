// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";
// import { format } from "fast-csv";
// import { Readable } from "stream";

// // Configure your email details
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "quiz.verse@softage.ai", // Check if defined
//         pass: "snyt ropv qvnb gjvy",
//     },
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

//     try {
//         const { responses } = req.body;

//         if (!responses || responses.length === 0) {
//             return res.status(400).json({ message: "No responses provided." });
//         }

//         // Convert JSON responses to CSV format
//         const csvStream = format({ headers: true });
//         const csvData: string[] = [];

//         csvStream.on("data", (chunk) => csvData.push(chunk.toString()));
//         csvStream.on("end", async () => {
//             const csvString = csvData.join("");

//             // Send email with CSV attachment
//             const mailOptions = {
//                 from: process.env.EMAIL_USER,
//                 to: "ashish.joshi@softage.ai", // Change to your admin email
//                 subject: "Quiz Responses - CSV Report",
//                 text: "Attached is the quiz responses report in CSV format.",
//                 attachments: [
//                     {
//                         filename: "quiz_responses.csv",
//                         content: csvString,
//                         contentType: "text/csv",
//                     },
//                 ],
//             };

//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ message: "CSV sent successfully!" });
//         });

//         // Write responses to CSV
//         Readable.from(responses).pipe(csvStream);
//     } catch (error) {
//         console.error("Error sending CSV:", error);
//         res.status(500).json({ message: "Failed to send CSV." });
//     }
// }




import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { format } from "fast-csv";
import { Readable } from "stream";

// Configure the mail transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "quiz.verse@softage.ai",
        pass: "snyt ropv qvnb gjvy", // consider using environment variables
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const { name, email, EmpCode, Day, responses } = req.body;

        if (!responses || responses.length === 0) {
            return res.status(400).json({ message: "No responses provided." });
        }

        const csvStream = format({ headers: true });
        const csvData: string[] = [];

        csvStream.on("data", (chunk) => csvData.push(chunk.toString()));
        csvStream.on("end", async () => {
            const csvString = csvData.join("");

            const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

            const mailOptions = {
                from: '"QuizVerse - SoftAge" <quiz.verse@softage.ai>',
                to: "vipul.singh@softage.ai", // change to admin/HR email
                subject: `📋 [${Day}] Quiz Submission | ${name}`,
                text: `
Hello Team,

A new quiz has been completed by a candidate. Please find the submission details and CSV report attached below.

📌 Candidate Details:
- Name : ${name}
- Email : ${email}
- Assessment : ${Day}
- Submitted : ${today}

🧾 Please find the CSV response report attached.

Best regards,  
QuizVerse - SoftAge AI Onboarding System
        `,
                attachments: [
                    {
                        filename: `quiz_${name}_${today}.csv`,
                        content: csvString,
                        contentType: "text/csv",
                    },
                ],
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "CSV email sent successfully." });
        });

        // Write response data into the stream
        Readable.from(responses).pipe(csvStream);
    } catch (error: any) {
        console.error("❌ Failed to send CSV email:", error?.message || error);
        res.status(500).json({ message: "Internal Server Error: Unable to send email." });
    }
}
