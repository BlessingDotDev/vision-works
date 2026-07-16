import { services } from "@/data/services";
import Availability from "./Availability";
import CheckboxItem from "@/components/ui/CheckboxItem";

function SideBar() {
  return (
    <div className="hidden lg:flex order-3 md:order-1 
      flex-col gap-6 ring-1 ring-gray-800 rounded-2xl p-4"
    >
      <div className="flex justify-between items-center">
        <h3>Filter</h3>
        <h4>Reset</h4>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Catefories</h3>

        <div className="flex flex-col gap-2">
          <CheckboxItem label="All Category" />

          {services.map((service) => (
            <CheckboxItem
              key={service.id}
              label={service.name}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Availability</h3>

        <Availability />
      </div>
    </div>
  )
}

export default SideBar;