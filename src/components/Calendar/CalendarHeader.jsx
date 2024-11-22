import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { format } from "date-fns";

const CalendarHeader = ({ currentDate, onPrevious, onNext, onViewChange, currentView }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold">
          {format(currentDate, currentView === 'month' ? 'MMMM yyyy' : 'EEEE, MMMM d, yyyy')}
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewChange('month')}
            className={currentView === 'month' ? 'bg-calendar-selected' : ''}
          >
            Month
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewChange('day')}
            className={currentView === 'day' ? 'bg-calendar-selected' : ''}
          >
            Day
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={onPrevious}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeader;