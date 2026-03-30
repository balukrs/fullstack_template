const Navbar = () => {
  return (
    <nav className="bg-amber-800/50 p-4 flex justify-between items-center rounded-sm mb-2">
      <h1 className="text-lg text-amber-400">Tasks</h1>

      <section className="text-sm text-amber-800 flex gap-2">
        <button>All</button>
        <button>Completed</button>
        <button>Incomplete</button>
        <button>Trash</button>
      </section>
    </nav>
  )
}

export default Navbar
