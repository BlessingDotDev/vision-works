import Provider from "./Provider";
import Pagination from "./Pagination";

function MainBar() {
  return (
    <div className="order-1 md:order-2 flex flex-col gap-6
       rounded-2xl p-4">
      <p className="text-sm">
        120 providers found
      </p>

      <div className="flex flex-col gap-8">
        <Provider />
        <Provider />
        <Provider />
      </div>

      <Pagination />
    </div>
  )
}

export default MainBar;