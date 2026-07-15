import SearchInput from "@/components/home/SearchInput";

export default function Home() {
  return (
      <>
      <title>Vision Works | Find Your Task</title>

      <main className=" min-h-screen p-8">
        <section>
          <h1 className="text-center text-3xl my-12 tracking-wide">
            Find Help for home tasks
          </h1>
          
          <SearchInput />
          
        </section>
      </main>
    </>
  );
}
