import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/eventFlash.css';
import { Event } from '../utils/eventUtils';

interface EventFlashProps {
  event: Event;
}

export const EventFlash: React.FC<EventFlashProps> = ({ event }) => {
  return (
    <section id="event-flash" className="event-flash-section">
      <div className="event-flash-container">
        <div className="event-flash-content">
          <div className="event-flash-text">
            <div className="event-flash-badge">
              <span className="badge-text">{event.id === 0 ? 'Stay Updated' : 'Upcoming Event'}</span>
            </div>
            <h2 className="event-flash-title">{event.title}</h2>
            <p className="event-flash-description">{event.description}</p>
            
            <div className="event-flash-details">
              <div className="event-detail-item">
                <FaCalendarAlt className="event-icon" />
                <span>{event.date} • {event.time}</span>
              </div>
              <div className="event-detail-item">
                <FaMapMarkerAlt className="event-icon" />
                <span>{event.location}</span>
              </div>
            </div>

            <div className="event-flash-actions">
              {event.id !== 0 && event.link && event.link !== '#' && (
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="event-primary-btn"
                >
                  Join Event
                  <FaArrowRight className="btn-icon" />
                </a>
              )}
              <Link to="/events" className="event-secondary-btn">
                {event.id === 0 ? 'View All Events' : 'Event Details'}
              </Link>
            </div>
          </div>
          
          <div className="event-flash-visual">
            <div className="event-image-container">
              <img 
                src={event.image} 
                alt={event.title}
                className="event-flash-image"
              />
              <div className="event-image-overlay">
                <div className="event-category-tag">{event.category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
