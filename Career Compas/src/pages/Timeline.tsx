import { timeline } from "@/data/timeline";

const typeColor = {
  admission: "bg-blue-100 text-blue-800",
  scholarship: "bg-green-100 text-green-800",
  exam: "bg-yellow-100 text-yellow-800"
};

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">Important Dates & Timeline</h1>
        <div className="relative border-l-2 border-primary/30 pl-8">
          {timeline.sort((a, b) => a.date.localeCompare(b.date)).map(event => (
            <div key={event.id} className="mb-10 relative">
              <div className="absolute -left-4 top-1.5 w-7 h-7 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                <span className={`text-xs font-bold capitalize ${typeColor[event.type]}`}>{event.type[0]}</span>
              </div>
              <div className="bg-white rounded shadow p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs px-2 py-1 rounded ${typeColor[event.type]}`}>{event.type.toUpperCase()}</span>
                  <span className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
                <p className="text-sm mb-2">{event.description}</p>
                {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">More Info</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
