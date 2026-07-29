const EVENTS = [];

function getAllEvents() {
  return EVENTS.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
}

function getUpcomingEvents(limit = 4) {
  return getAllEvents().filter(event => new Date(event.date) >= new Date()).slice(0, limit);
}
