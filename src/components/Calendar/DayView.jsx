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
    <div className="flex-1 overflow-y-auto">
      {hours.map((hour) => {
        const hourEvents = getEventsForHour(hour);
        
        return (
          <div key={hour.toString()} className="flex border-t min-h-[60px]">
            <div className="w-20 p-2 text-sm text-gray-500 text-right">
              {format(hour, 'h a')}
            </div>
            <div className="flex-1 p-2">
              {hourEvents.map((event, idx) => (
                <div
                  key={event.id}
                  className={`text-sm p-2 mb-1 rounded text-white bg-calendar-event${(idx % 4) + 1}`}
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