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
      <p className="font-semibold leading-relaxed tracking-widest">
        {name}
      </p>
      <p className="text-gray-300 text-sm tracking-wide">
        {keywords.join(', ')}
      </p>
    </Link>
  )
}

export default TaskSelected;