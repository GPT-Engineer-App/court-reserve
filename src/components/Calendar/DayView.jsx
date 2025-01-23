import { format, addHours, startOfDay } from "date-fns";

const DayView = ({ currentDate, events }) => {
  const hours = Array.from({ length: 24 }, (_, i) => addHours(startOfDay(currentDate), i));

  const getEventsForHour = (hour) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getHours() === hour.getHours();
    });
  };

  return (
    <div className="flex-1 overflow-y-auto bg-white">
      {hours.map((hour) => {
        const hourEvents = getEventsForHour(hour);
        
        return (
          <div key={hour.toString()} className="flex border-b min-h-[48px] group hover:bg-gray-50">
            <div className="w-20 py-2 px-3 text-xs text-gray-500 text-right group-hover:text-blue-600">
              {format(hour, 'h a')}
            </div>
            <div className="flex-1 border-l">
              {hourEvents.map((event, idx) => (
                <div
                  key={event.id}
                  className={`text-sm p-2 m-1 rounded text-white cursor-pointer transition-transform hover:scale-[1.02]
                    ${idx === 0 ? 'bg-calendar-event1' : ''}
                    ${idx === 1 ? 'bg-calendar-event2' : ''}
                    ${idx === 2 ? 'bg-calendar-event3' : ''}
                    ${idx === 3 ? 'bg-calendar-event4' : ''}`}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DayView;