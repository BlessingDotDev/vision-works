import Button from "@/components/ui/Button";

const pages = [1,2,3,4,5,6,7,8,9,10]

function Pagination() {
  return (
    <div className="flex justify-center gap-2">
      {pages.map((number, index) => (
        (index < 3) && (
          <Button key={index} variant={(index === 0) ? 'primary' : 'tertiary'} size="sm">
            {number}
          </Button>
        ) 
      ))}
      <Button variant="tertiary" size="sm">...</Button>
      <Button variant="tertiary" size="sm">10</Button>
      <Button variant="primary" size="sm" className="font-light">Next
      </Button>
    </div>
  )  
}

export default Pagination;