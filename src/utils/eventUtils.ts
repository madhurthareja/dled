// Event utility functions
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  status: string;
  speakers: string[];
  link: string;
}

// All events data - this should be the single source of truth
export const allEvents: Event[] = [
  {
    id: 1,
    title: "ViBe Launch",
    date: "July 29, 2025",
    time: "11:00 AM - 12:00 PM",
    location: "Virtual Event",
    description:
      "Launch of ViBe, a wave of revolutionary educational tools for teachers and students.",
    image: "/images/events/vibe.jpg",
    category: "Product Launch",
    status: "upcoming",
    speakers: ["Dr. Sudarshan Iyengar", "DLED Research Team"],
    link: "https://zoom.us/j/94299775769?pwd=c6VakDdjWeE8t97eGrORYWAgns9aPy.1",
  },
  {
    id: 2,
    title: "Guru Purnima Meetup",
    date: "July 10, 2025",
    time: "8:00 PM - 9:00 PM",
    location: "Virtual Event",
    description: "A special online gathering to celebrate Guru Purnima.",
    image: "/images/events/gurupurnima.png",
    category: "",
    speakers: [""],
    status: "past",
    link: "https://zoom.us/j/98466227317?pwd=CaF207puvMhgbtnAvmNRhNYUvPLgqZ.1",
  },
];

// Default event for when no upcoming events exist
export const defaultEvent: Event = {
  id: 0,
  title: "Stay Tuned for Upcoming Events",
  date: "Coming Soon",
  time: "TBD",
  location: "To be announced",
  description:
    "We are working on exciting new events. Follow our updates to stay informed about upcoming workshops, launches, and educational initiatives.",
  image: "/images/events/vibe.png",
  category: "Announcement",
  status: "upcoming",
  speakers: ["DLED Team"],
  link: "#",
};

// Parse date and time to create a comparable Date object
export function parseEventDateTime(dateStr: string, timeStr: string): Date {
  // Extract start time from time range (e.g., "11:00 AM - 12:00 PM" -> "11:00 AM")
  const startTime = timeStr.split(" - ")[0];

  // Create date object from date string and start time
  const eventDate = new Date(`${dateStr} ${startTime}`);

  // If the date is invalid, return a date far in the past
  if (isNaN(eventDate.getTime())) {
    return new Date(0);
  }

  return eventDate;
}

// Get the next upcoming event (closest to current date/time)
export function getNextUpcomingEvent(): Event {
  const now = new Date();

  // Filter upcoming events and sort by date/time
  const upcomingEvents = allEvents
    .filter((event) => event.status === "upcoming")
    .map((event) => ({
      ...event,
      parsedDateTime: parseEventDateTime(event.date, event.time),
    }))
    .filter((event) => event.parsedDateTime > now) // Only future events
    .sort((a, b) => a.parsedDateTime.getTime() - b.parsedDateTime.getTime());

  // Return the closest upcoming event, or default event if none exist
  return upcomingEvents.length > 0 ? upcomingEvents[0] : defaultEvent;
}

// Check if an event is happening today
export function isEventToday(event: Event): boolean {
  const today = new Date();
  const eventDate = parseEventDateTime(event.date, event.time);

  return (
    eventDate.getDate() === today.getDate() &&
    eventDate.getMonth() === today.getMonth() &&
    eventDate.getFullYear() === today.getFullYear()
  );
}

// Get events by status
export function getEventsByStatus(status: "upcoming" | "past"): Event[] {
  return allEvents.filter((event) => event.status === status);
}

// Update event status based on current date/time
export function updateEventStatuses(): Event[] {
  const now = new Date();

  return allEvents.map((event) => {
    const eventDateTime = parseEventDateTime(event.date, event.time);
    const eventEndTime = new Date(eventDateTime.getTime() + 2 * 60 * 60 * 1000); // Assume 2 hours duration

    // If event end time has passed, mark as past
    if (eventEndTime < now) {
      return { ...event, status: "past" };
    }

    return event;
  });
}
