import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameMonth, isSameDay, startOfWeek, endOfWeek } from "date-fns";

const MonthView = ({ currentDate, events, onSelectDate }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const getEventsForDate = (date) => {
    return events.filter((event) => isSameDay(new Date(event.date), date));
  };

  return (
    <div className="grid grid-cols-7 flex-1">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
          {day}
        </div>
      ))}
      {days.map((day) => {
        const dayEvents = getEventsForDate(day);
        const isCurrentMonth = isSameMonth(day, currentDate);
        
        return (
          <div
            key={day.toString()}
            onClick={() => onSelectDate(day)}
            className={`min-h-[100px] p-2 border-t border-r cursor-pointer transition-colors hover:bg-calendar-hover
              ${!isCurrentMonth ? 'text-gray-400 bg-gray-50' : ''}
              ${isSameDay(day, new Date()) ? 'bg-calendar-selected' : ''}`}
          >
            <div className="font-medium">{format(day, 'd')}</div>
            <div className="space-y-1 mt-1">
              {dayEvents.slice(0, 3).map((event, idx) => (
                <div
                  key={event.id}
                  className={`text-xs p-1 rounded truncate text-white bg-calendar-event${(idx % 4) + 1}`}
                >
                  {event.title}
                </div>
              ))}
              {dayEvents.length > 3 && (
                <div className="text-xs text-gray-500">
                  +{dayEvents.length - 3} more
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthView;