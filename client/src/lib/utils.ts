import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadResume() {
  // Create anchor element to download the resume
  const link = document.createElement('a');
  
  // In a real implementation, this would be the path to the actual resume file
  link.href = '/api/download-resume';
  
  // Filename that will appear when downloading
  link.download = 'Disha_Verma_Resume.pdf';
  
  // Append to the body, click programmatically, then remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Show a success message
  alert("Resume download initiated. If the download doesn't start automatically, please try again.");
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
