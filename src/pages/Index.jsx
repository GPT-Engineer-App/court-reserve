import { useState } from "react";
import { addMonths, addDays, subMonths, subDays } from "date-fns";
import CalendarHeader from "@/components/Calendar/CalendarHeader";
import MonthView from "@/components/Calendar/MonthView";
import DayView from "@/components/Calendar/DayView";

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");
  
  // Sample events - in a real app, this would come from an API or database
  const [events] = useState([
    { id: 1, title: "Team Meeting", date: new Date(2024, 3, 15, 10) },
    { id: 2, title: "Lunch with Client", date: new Date(2024, 3, 15, 12) },
    { id: 3, title: "Project Review", date: new Date(2024, 3, 16, 14) },
    { id: 4, title: "Doctor Appointment", date: new Date(2024, 3, 17, 9) },
  ]);

  const handlePrevious = () => {
    if (currentView === "month") {
      setCurrentDate(subMonths(currentDate, 1));
    } else {
      setCurrentDate(subDays(currentDate, 1));
    }
  };

  const handleNext = () => {
    if (currentView === "month") {
      setCurrentDate(addMonths(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, 1));
    }
  };

  const handleDateSelect = (date) => {
    setCurrentDate(date);
    setCurrentView("day");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CalendarHeader
        currentDate={currentDate}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onViewChange={setCurrentView}
        currentView={currentView}
      />
      <div className="flex-1 flex flex-col">
        {currentView === "month" ? (
          <MonthView
            currentDate={currentDate}
            events={events}
            onSelectDate={handleDateSelect}
          />
        ) : (
          <DayView
            currentDate={currentDate}
            events={events}
          />
        )}
      </div>
    </div>
  );
};

export default Index;