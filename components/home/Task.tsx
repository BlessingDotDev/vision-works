import type { LucideIcon } from "lucide-react";
import type { Category } from "../../types/services"
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx"
import { iconName, icon } from "@/lib/styles";

type TaskProps = {
  id: Category;
  name: string;
  setActive:  Dispatch<SetStateAction<Category | null>>
  Icon: LucideIcon;
  active: Category | null;
}

function Task({id, name, setActive, Icon, active }: TaskProps) {
  return (
    <div
      key={id}
      onClick={() => setActive(id)}
      className="flex justify-center items-center shrink-0 flex-col 
                group cursor-pointer gap-2"
    >
      <Icon 
        strokeWidth={2}
        
        className={clsx(
        active === id ? "text-green-500" : "text-gray-200",
        icon
        )} 
      />

      <p className={clsx(
        active === id ? "text-green-500" : "text-gray-200",
        iconName
        )}
      >
        {name}
      </p>
    </div>
  )
}

export default Task;