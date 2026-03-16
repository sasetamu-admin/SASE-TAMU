'use server';



import ical from 'node-ical';

export async function getUpcomingSaseEvents() {
  const ICS_URL = 'https://calendar.google.com/calendar/ical/sasetamu%40gmail.com/public/basic.ics';
  const today = new Date();

  
  try {
    const rawData = await ical.fromURL(ICS_URL);
    return Object.values(rawData)
      .filter(event => event.type === 'VEVENT')
      .filter(event => event.start.getTime() > today.getTime())
      .sort((a, b) => (a.start.getTime() - b.start.getTime()))
      .map(event => ({
        id: event.uid,
        title: event.summary,
        start: event.start.toISOString(),
        end: event.end.toISOString(),
        location: event.location || "TBD",
        description: event.description || ""
      }));
  } catch (error) {
    console.error("Failed to fetch ICS data:", error);
    return [];
  }
}

export async function getPastSaseEvents() {
  const ICS_URL = 'https://calendar.google.com/calendar/ical/sasetamu%40gmail.com/public/basic.ics';
  const today = new Date();

  
  try {
    const rawData = await ical.fromURL(ICS_URL);
    return Object.values(rawData)
      .filter(event => event.type === 'VEVENT')
      .filter(event => event.start.getFullYear() == today.getFullYear())
      .filter(event => event.start.getTime() > today.getTime() - 1000 * 60 * 60 * 24 * 7 * 1)
      .filter(event => event.start.getTime() < today.getTime())
      .sort((a, b) => (b.start.getTime() - a.start.getTime()))
      .map(event => ({
        id: event.uid,
        title: event.summary,
        start: event.start.toISOString(),
        end: event.end.toISOString(),
        location: event.location || "TBD",
        description: event.description || ""
      }));
  } catch (error) {
    console.error("Failed to fetch ICS data:", error);
    return [];
  }
}
