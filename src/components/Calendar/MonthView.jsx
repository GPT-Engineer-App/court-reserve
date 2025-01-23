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
    <div className="grid grid-cols-7 flex-1 bg-white">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="p-2 text-center text-xs font-medium text-gray-500 border-b">
          {day}
        </div>
      ))}
      {days.map((day) => {
        const dayEvents = getEventsForDate(day);
        const isCurrentMonth = isSameMonth(day, currentDate);
        const isToday = isSameDay(day, new Date());
        
        return (
          <div
            key={day.toString()}
            onClick={() => onSelectDate(day)}
            className={`min-h-[120px] p-2 border-b border-r cursor-pointer transition-colors hover:bg-gray-50
              ${!isCurrentMonth ? 'bg-gray-50' : ''}
              ${isToday ? 'bg-blue-50' : ''}`}
          >
            <div className={`text-sm font-medium mb-1 ${
              isToday ? 'text-blue-600' : !isCurrentMonth ? 'text-gray-400' : ''
            }`}>
              {format(day, 'd')}
            </div>
            <div className="space-y-1">
              {dayEvents.slice(0, 3).map((event, idx) => (
                <div
                  key={event.id}
                  className={`text-xs p-1 rounded truncate text-white
                    ${idx === 0 ? 'bg-calendar-event1' : ''}
                    ${idx === 1 ? 'bg-calendar-event2' : ''}
                    ${idx === 2 ? 'bg-calendar-event3' : ''}
                    ${idx === 3 ? 'bg-calendar-event4' : ''}`}
                >
                  {event.title}
                </div>
              ))}
              {dayEvents.length > 3 && (
                <div className="text-xs text-gray-500 pl-1">
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