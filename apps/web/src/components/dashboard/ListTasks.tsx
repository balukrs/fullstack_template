const ListTasks = () => {
  return (
    <section className="bg-amber-700 my-10 px-2 py-4">
      <ul className="h-[50%] ">
        <li className=" bg-amber-400 px-2 py-4 mb-2 mt-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span>List1</span>
          </div>
          <div>
            <span>Test user.hgkjgksaj......</span>
          </div>
          <div className=" flex gap-1">
            <button className=" bg-amber-600/45 p-1 rounded-sm">View</button>
            <button className=" bg-red-400 p-1 rounded-sm">Del</button>
          </div>
        </li>
      </ul>
      <section className=" flex items-center justify-between mx-1">
        <div className=" flex gap-2 items-center">
          <button className="bg-amber-800/90 rounded-full w-8 h-8 flex justify-center items-center">
            {'<'}
          </button>
          <span>1 / 10</span>
          <button className="bg-amber-800/90 rounded-full w-8 h-8 flex justify-center items-center">
            {'>'}
          </button>
        </div>
        <div>
          <select>
            <option selected>Limit</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </section>
    </section>
  )
}

export default ListTasks
