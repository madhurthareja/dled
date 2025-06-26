import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'; // FaTicketAlt, FaUsers

// Google Calendar Functionality
// Helper to format date and time for Google Calendar and ICS
function parseDateTime(dateStr: string, timeStr: string) {
  // This is a simple parser for your sample data format.
  // You may need to enhance this for more robust parsing.
  // Example: dateStr = 'May 15, 2025', timeStr = '10:00 AM - 4:00 PM'
  const [startTime, endTime] = timeStr.split(" - ");
  const start = new Date(`${dateStr} ${startTime}`);
  const end = endTime ? new Date(`${dateStr} ${endTime}`) : new Date(start.getTime() + 60 * 60 * 1000);

  // Google Calendar and ICS use UTC in YYYYMMDDTHHmmssZ format
  const pad = (n: number) => n.toString().padStart(2, "0");
  const format = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

  return {
    gcStart: format(start),
    gcEnd: format(end),
    icsStart: format(start),
    icsEnd: format(end),
  };
}

// Helper to generate Google Calendar link
function getGoogleCalendarUrl(event: any) {
  const { gcStart, gcEnd } = parseDateTime(event.date, event.time);
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = [
    `text=${encodeURIComponent(event.title)}`,
    `dates=${gcStart}/${gcEnd}`,
    `details=${encodeURIComponent(event.description || "")}`,
    `location=${encodeURIComponent(event.location || "")}`,
  ];
  return `${base}&${params.join("&")}`;
}

// Helper to generate and download ICS file
function downloadICS(event: any) {
  const { icsStart, icsEnd } = parseDateTime(event.date, event.time);
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DTSTART:${icsStart}`,
    `DTEND:${icsEnd}`,
    `DESCRIPTION:${event.description || ""}`,
    `LOCATION:${event.location || ""}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.title.replace(/\s+/g, "_")}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}



const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isLoading, setIsLoading] = useState(true);
  
  const allEvents = [
    {
      id: 1,
      title: 'AI in Education Workshop',
      date: 'May 15, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'IIT Ropar Campus, Innovation Center',
      description: 'A hands-on workshop exploring the applications of AI in personalized learning systems.',
      image: '/images/events.jpg',
      category: 'Workshop',
      status: 'upcoming',
      speakers: ['Dr. Rajesh Sharma', 'Prof. Ananya Gupta']
    },
    {
      id: 2,
      title: 'Virtual Hackathon 2025',
      date: 'June 10-12, 2025',
      time: '48-hour event starting at 9:00 AM',
      location: 'Online',
      description: 'Join us for a 48-hour hackathon to develop innovative solutions for education challenges. Prizes include incubation support and research grants.',
      image: '/images/events.jpg',
      category: 'Hackathon',
      status: 'upcoming',
      partners: ['Google EDU', 'Microsoft Research']
    },
    {
      id: 3,
      title: 'Research Symposium on EdTech',
      date: 'July 20, 2025',
      time: '9:30 AM - 6:00 PM',
      location: 'IIT Ropar Campus, Auditorium',
      description: 'A symposium to present and discuss the latest research in educational technology with keynote speakers from academia and industry.',
      image: '/images/events.jpg',
      category: 'Conference',
      status: 'upcoming',
      keynote: 'Dr. Priya Nair, MIT'
    },
    {
      id: 4,
      title: 'Digital Pedagogy Masterclass',
      date: 'April 5, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Online',
      description: 'Learn innovative digital teaching methods from award-winning educators.',
      image: '/images/masterclass.jpg',
      category: 'Workshop',
      status: 'past',
      recording: 'Available for registered participants'
    }
  ];

  const filteredEvents = allEvents.filter(event => 
    activeTab === 'upcoming' ? event.status === 'upcoming' : event.status === 'past'
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="events-page">
      {/* Hero Section  */}
      <section className="hero-section text-white py-6" style={{ background: 'linear-gradient(130deg,rgb(253, 232, 224) 0%,rgb(253, 249, 247) 85%)' }}>
        <div className="container position-relative py-5">
          <h1 className="display-4 text-black fw-bold mb-4 mt-4">Events at DLED</h1>
          <p className="lead mb-4 fs-4 text-secondary">
            Join our knowledge-sharing community
          </p>
          <div>
            <button className="btn btn-lg px-4 text-light dark-button" style={{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)', marginRight: '20px'}} >Subscribe to Updates </button>
            
            {/* <button className="btn btn-lg px-4 light-button" style ={{ borderWidth: '1.3px', borderColor: 'rgb(233, 103, 52)', color: 'rgb(233, 103, 52)' }} >Past Events Archive</button> */}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Discover Our Events</h2>
            <p className="lead text-muted max-w-800 mx-auto">
              Workshops, hackathons, and symposiums designed to inspire and educate
            </p>
            
            {/* Event Type Tabs */}
            <div className="d-flex justify-content-center mb-4">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-${activeTab === 'upcoming' ? 'warning fw-bold' : 'outline-dark-subtle fw-bold'}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming Events
                </button>
                <button
                  type="button"
                  className={`btn btn-${activeTab === 'past' ? 'warning fw-bold' : 'outline-warning fw-bold'}`}
                  onClick={() => setActiveTab('past')}
                >
                  Past Events
                </button>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div key={event.id} className="col-lg-6">
                    <div className="event-card card h-100 border-0 shadow-sm overflow-hidden hover-shadow-lg transition-all">
                      <div className="row g-0 h-100">
                        <div className="col-md-5">
                          <img 
                            src={event.image} 
                            className="img-fluid h-100 " 
                            alt={event.title}
                            style={{minHeight: '200px'}}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body p-4 d-flex flex-column h-100">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <span className="badge" style={{ backgroundColor: 'rgb(223, 94, 8)', color: 'rgb(252, 251, 196)' }}  >{event.category}</span>
                              {event.status === 'upcoming' && (
                                <span className="badge" style={{ backgroundColor: 'rgb(248, 229, 201)', color: 'rgb(59, 58, 58)' }} >Registration Open</span>
                              )}
                            </div>
                            <h3 className="h4 card-title fw-bold">{event.title}</h3>
                            
                            <div className="d-flex flex-wrap gap-3 my-3 text-muted small">
                              <div className="d-flex align-items-center">
                                <FaCalendarAlt className="me-2" />
                                <span>{event.date}</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <FaRegClock className="me-2" />
                                <span>{event.time}</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <FaMapMarkerAlt className="me-2" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            
                            <p className="card-text flex-grow-1">{event.description}</p>

                            <div className="mt-4 d-flex gap-2">
                            <button className="btn btn-warning text-dark fw-bold flex-grow-1">
                              {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                            </button>
                            <a
                              href={getGoogleCalendarUrl(event)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-secondary"
                              title="Add this event to your Google Calendar"
                            >
                              <i className="far fa-calendar-plus" aria-hidden="true"></i>
                              <span className="visually-hidden">Add to Google Calendar</span>
                            </a>
                            <button
                              className="btn btn-outline-secondary"
                              title="Download .ics file to add this event to any calendar app"
                              onClick={() => downloadICS(event)}
                              type="button"
                            >
                              <i className="far fa-calendar-alt" aria-hidden="true"></i>
                              <span className="visually-hidden">Download ICS</span>
                            </button>
                          </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <div className="alert alert-info">
                    No {activeTab} events currently. Check back soon!
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white" style ={{ backgroundColor: 'rgb(233, 103, 52)' }}>
        <div className="container text-center py-4">
          <h2 className="display-6 fw-bold mb-4" style={{ color: 'rgb(252, 251, 196)' }}  >Have an event idea?</h2>
          <p className="lead mb-4">We're always looking for collaborators and interesting topics.</p>
          <button className="btn btn-light btn-lg px-4">
            Propose an Event <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;