import http from "http";
import db from "./db.js";
import { validateContact } from "./validators.js";

const PORT = 5000;

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle contact form submission
  if (req.method === "POST" && req.url === "/api/contact") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const result = validateContact(data);

        if (result.error) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: result.error }));
          return;
        }

        const { name, email, message } = result.cleanData;

        db.run(
          `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`,
          [name, email, message],
          function (err) {
            if (err) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: "Database error" }));
            } else {
              res.writeHead(201, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: true }));
            }
          }
        );
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

    return;
  }

  // Fallback
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
