import CheckboxItem from "@/components/ui/CheckboxItem";
import { availability } from "@/data/services";

function Availability() {

  return (
    <div className="flex flex-col gap-2">
      {availability.map((period) => (
        <CheckboxItem
          key={period.id}
          label={period.name}
        />
      ))}
    </div>
  )
}

export default Availability;