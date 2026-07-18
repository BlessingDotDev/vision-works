import Link from "next/link"

type TaskSelectedProps = {
  name: string;
  keywords: string[];
}

function TaskSelected({ name, keywords}: TaskSelectedProps) {
  return (
    <Link 
      href={`/services`} 
      key={name} 
      className="p-4 rounded-lg shadow-sm hover:shadow-md shadow-purple-700"
    >
      <div className="flex justify-center items-center">
        <button></button>
      </div>

      <h3 className="font-thin leading-relaxed tracking-widest">
        {name}
      </h3>
      <h4 className="text-gray-300 text-sm tracking-wide">
        {keywords.join(', ')}
      </h4>
    </Link>
  )
}

export default TaskSelected;