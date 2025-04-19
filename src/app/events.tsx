import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaRegClock, FaTicketAlt, FaUsers } from 'react-icons/fa';

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
      category: 'workshop',
      status: 'upcoming',
      seats: 30,
      registered: 24,
      price: 'Free',
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
      category: 'hackathon',
      status: 'upcoming',
      seats: 100,
      registered: 78,
      price: 'Free',
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
      category: 'conference',
      status: 'upcoming',
      seats: 150,
      registered: 112,
      price: '₹500 (Students ₹200)',
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
      category: 'workshop',
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
      <section className="hero-section bg-dark text-white py-6 position-relative overflow-hidden">
        <div className="position-absolute w-100 h-100 bg-dark opacity-75"></div>
        <div 
          className="position-absolute w-100 h-100 bg-cover bg-center" 
          style={{
            backgroundImage: 'url(/images/events-hero.jpg)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="container position-relative py-5">
          <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">Events at DLED</h1>
          <p className="lead fs-3 mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Join our knowledge-sharing community
          </p>
          <div className="d-flex gap-3 animate__animated animate__fadeIn animate__delay-2s">
            <button className="btn btn-primary btn-lg px-4">Subscribe to Updates</button>
            <button className="btn btn-outline-light btn-lg px-4">Past Events Archive</button>
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
                  className={`btn btn-${activeTab === 'upcoming' ? 'primary' : 'outline-primary'}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming Events
                </button>
                <button
                  type="button"
                  className={`btn btn-${activeTab === 'past' ? 'primary' : 'outline-primary'}`}
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
                              <span className="badge bg-secondary">{event.category}</span>
                              {event.status === 'upcoming' && (
                                <span className="badge bg-success">Open Registration</span>
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
                            
                            {event.status === 'upcoming' && (
                              <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3 border-top">
                                <div className="d-flex align-items-center">
                                  <FaUsers className="me-2 text-muted" />
                                  <small className="text-muted">
                                    {event.registered}/{event.seats} registered
                                  </small>
                                </div>
                                <div className="d-flex align-items-center">
                                  <FaTicketAlt className="me-2 text-muted" />
                                  <small className="text-muted">{event.price}</small>
                                </div>
                              </div>
                            )}
                            
                            <div className="mt-4 d-flex gap-2">
                              <button className="btn btn-primary flex-grow-1">
                                {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                              </button>
                              <button className="btn btn-outline-secondary" title="Add to Calendar">
                                <i className="far fa-calendar-plus" aria-hidden="true"></i>
                                <span className="visually-hidden">Add to Calendar</span>
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
      <section className="py-5 bg-primary text-white">
        <div className="container text-center py-4">
          <h2 className="display-6 fw-bold mb-4">Have an event idea?</h2>
          <p className="lead mb-4">We're always looking for collaborators and interesting topics</p>
          <button className="btn btn-light btn-lg px-4">
            Propose an Event <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;