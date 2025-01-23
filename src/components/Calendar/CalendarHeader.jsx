import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { format } from "date-fns";

const CalendarHeader = ({ currentDate, onPrevious, onNext, onViewChange, currentView }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-medium text-gray-900">
          {format(currentDate, currentView === 'month' ? 'MMMM yyyy' : 'EEEE, MMMM d, yyyy')}
        </h2>
        <div className="flex rounded-lg overflow-hidden border border-gray-300">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange('month')}
            className={`rounded-none border-r border-gray-300 ${
              currentView === 'month' ? 'bg-gray-100' : ''
            }`}
          >
            Month
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange('day')}
            className={currentView === 'day' ? 'bg-gray-100' : ''}
          >
            Day
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" onClick={onPrevious}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeader;