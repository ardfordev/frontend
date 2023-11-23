import { NavLink } from "react-router-dom"

const PageNotFound = () => {
  return (
    <section className="w-full h-screen font-jakarta py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 items-center">
        <div className="flex flex-col justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-5xl text-green-500 font-bold tracking-tighter">
              404 Page Not Found
            </h1>
            <p className="max-w-[600px] text-gray-900 md:text-xl dark:text-zinc-100 mx-auto">
              Halaman tidak ditemukan.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 mx-auto">
            <NavLink className="bg-green-500 py-3 px-4 rounded-full font-semibold text-gray-900" to="/">Back to Home</NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PageNotFound