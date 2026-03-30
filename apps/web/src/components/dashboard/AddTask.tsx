const AddTask = () => {
  return (
    <section className="w-full flex justify-center">
      <form className=" flex flex-col gap-2">
        <div className="flex flex-col">
          <label className=" text-white/40">Title</label>
          <input className="border p-1.5 border-white/40 w-100" />
        </div>
        <div className="flex flex-col">
          <label className=" text-white/40">Description</label>
          <textarea className="border p-1.5 border-white/40 w-100" />
        </div>
        <div>
          <button type="submit" className="p-2 bg-black/45 rounded-sm hover:text-white w-full">
            Add
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddTask
