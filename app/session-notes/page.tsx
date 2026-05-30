export default function SessionNotesPage() {
  const files = [
    {
      title: "Session Notes — DSA II",
      description: "Data Structures and Algorithms — Session II",
      url: "/notes/dsa2.pdf",
      type: "PDF",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">Session Notes</h1>
      <p className="text-muted-foreground mb-8">
        Download or view session notes from all CodeClub sessions.
      </p>

      <div className="flex flex-col gap-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between border rounded-lg px-5 py-4"
          >
            <div>
              <p className="font-medium">{file.title}</p>
              <p className="text-sm text-muted-foreground">{file.description}</p>
            </div>
            <div className="flex gap-2">
              
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-md border hover:bg-accent transition-colors"
              >
                View
              </a>
              
                href={file.url}
                download
                className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
