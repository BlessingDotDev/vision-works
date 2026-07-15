type CheckboxItemProps = {
  label: string
  checked?: boolean
  onChange?: () => void
}

function CheckboxItem({
  label,
  checked,
  onChange,
}: CheckboxItemProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-green-500"
      />

      <span className="text-sm">{label}</span>
    </label>
  )
}

export default CheckboxItem;