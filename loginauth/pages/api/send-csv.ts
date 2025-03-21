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

// Configure your email details
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "quiz.verse@softage.ai",
        pass: "snyt ropv qvnb gjvy",
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const { name, email, EmpCode,Day, responses } = req.body;

        if (!responses || responses.length === 0) {
            return res.status(400).json({ message: "No responses provided." });
        }

        // Convert JSON responses to CSV format
        const csvStream = format({ headers: true });
        const csvData: string[] = [];

        csvStream.on("data", (chunk) => csvData.push(chunk.toString()));
        csvStream.on("end", async () => {
            const csvString = csvData.join("");

            // Email content with user details
            const mailOptions = {
                from: "quiz.verse@softage.ai",
                to: "ashish.joshi@softage.ai", // Change to your admin email
                subject: `Quiz Responses - (${EmpCode}) ${name} `,
                text: `Hello Admin,

Attached is the detailed quiz responses report in CSV format. 

                - Name: ${name}
                - Email: ${email}
                - Employee Code: ${EmpCode}
                - Assessment title: ${Day}\n
                Please find the CSV report attached.\n\nBest regards,\nQuiz System`,
                attachments: [
                    {
                        filename: `quiz_responses_${EmpCode}.csv`,
                        content: csvString,
                        contentType: "text/csv",
                    },
                ],
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "CSV sent successfully!" });
        });

        // Write responses to CSV
        Readable.from(responses).pipe(csvStream);
    } catch (error) {
        console.error("Error sending CSV:", error);
        res.status(500).json({ message: "Failed to send CSV." });
    }
}

