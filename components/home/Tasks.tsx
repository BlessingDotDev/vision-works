"use client"

import { useState } from 'react';
import Task from "./Task"
import TaskSelected from "./TaskSelected";
import { services } from '../../data/services';
import type { Category } from '../../types/services';

function Tasks() {
  const [active, setActive] = useState<Category | null>(null);

  return (
    <>
      <div className="flex justify-center items-center mx-1 gap-8 mt-12 overflow-x-auto 
        snap-x snap-mandatory no-scrollbar">
        {
          services.map((task) => (
           <Task 
            key={task.id}   
            id={task.id} name={task.name} 
            setActive={setActive} Icon={task.icon}
          />
          ))}
      </div>

      {/* Render selected content */}
      <div className="flex flex-col sm:justify-center sm:flex-row gap-4 flex-wrap">
        {active && services.find((task) => task.id === active)?.searchWords.map((search) => (
         <TaskSelected 
          key={search.name} 
          name={search.name} 
          keywords={search.keywords} 
        />
        ))}
      </div>
    </>
  );
}

export default Tasks;