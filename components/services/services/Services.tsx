import Service from './Service';
import { services } from "@/data/services"

function Services() {

  return (
    <section className="p-8">
      <div className="flex px-1 mx-1 gap-8 mt-12 overflow-x-auto 
        snap-x snap-mandatory no-scrollbar"
      >
        {
          services.map((service) => (
           <Service 
              key={service.id} 
              id={service.id}  
              name={service.name} 
              Icon={service.icon}
            />
          ))}
      </div>
    </section>
  );
}

export default Services;