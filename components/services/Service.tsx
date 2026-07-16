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
      className="flexcenter shrink-0 flex-col 
                group cursor-pointer gap-2 
                ring-1 ring-green-600 px-2"
    >
      <Icon className="w-6 h-6 text-gray-300
               group-hover:text-green-300 hoverEffect" />
      <h4 className="group-hover:text-green-300 h-12">
        {name}
      </h4>
    </div>
  )
}

export default Service;