export default function Resume() {
  const ResumeButton: React.FC = () => {
    const handleDownload = () => {
      // Construct the download link dynamically.
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Path to your resume file in the public directory
      link.download = "your_resume_name.pdf"; // Name the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return <button onClick={handleDownload}>Download Resume</button>;
  };
}
