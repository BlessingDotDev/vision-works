import CheckboxItem from "@/components/ui/CheckboxItem";

function Availability() {

  const availability = [
    {
      id: crypto.randomUUID(),
      name: 'Anytime',
    },
    {
      id: crypto.randomUUID(),
      name: 'Today',
    },
    {
      id: crypto.randomUUID(),
      name: 'This Week'
    }
  ]

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