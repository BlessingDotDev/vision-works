import type { LucideIcon } from 'lucide-react';

type ServiceProps = {
  id: string;
  name: string;
  Icon: LucideIcon;
}

function Service({id, name, Icon}: ServiceProps) {
  return (
    <div
      key={id}
      className="flex justify-center items-center shrink-0 flex-col 
                group cursor-pointer gap-2 
                ring-1 ring-green-600 px-2"
    >
      <Icon className="w-5 h-5 text-gray-300
               group-hover:text-green-500 hoverEffect" />
      <p className="group-hover:text-green-500 text-xs text-gray-300 tracking-wide hoverEffect">
        {name}
      </p>
    </div>
  )
}

export default Service;