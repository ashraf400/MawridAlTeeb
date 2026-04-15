import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Form Submission
  app.post("/api/submit-form", async (req, res) => {
    try {
      const formData = req.body;
      console.log("Form Data Received:", formData);

      // LINK WITH SHEET: 
      // In a real production scenario, you would use the Google Sheets API 
      // or a webhook URL (like Zapier or Make.com) to send this data to a sheet.
      const sheetWebhookUrl = process.env.SHEET_WEBHOOK_URL;
      
      if (sheetWebhookUrl) {
        await fetch(sheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      res.status(200).json({ 
        success: true, 
        message: "تم استلام طلبك بنجاح وسيتم التواصل معك قريباً." 
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ 
        success: false, 
        message: "حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
