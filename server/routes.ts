import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for downloading resume
  app.get("/api/download-resume", (req, res) => {
    // This would typically serve a real PDF resume file
    res.status(200).json({ message: "Resume download endpoint" });
  });

  // API endpoint for contact form
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    
    // This would typically send an email or store the message in a database
    // For now, just return a success response
    return res.status(200).json({ message: "Message received successfully" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
