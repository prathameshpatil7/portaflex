import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";

const DatePickerWithLabel = ({ name, label, date, setDate, disabled }) => (
  <div className="flex flex-col space-y-2">
    {console.log(date)}
    <Label htmlFor={name}>{label}</Label>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={name}
          variant={"outline"}
          className={`w-full justify-start text-left font-normal ${
            !date && "text-muted-foreground"
          }`}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date && date !== "Present" ? (
            format(date, "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  </div>
);

export default DatePickerWithLabel;
