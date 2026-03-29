const Dashboard = () => {
  return (
    <div className="container h-full mx-auto overflow-x-hidden">
      <nav className="bg-amber-800/50 p-4 flex justify-between items-center translate-y-2 rounded-sm mb-2">
        <h1 className="text-lg text-amber-400">Tasks</h1>

        <section className="text-sm text-amber-800 flex gap-2">
          <button>All</button>
          <button>Completed</button>
          <button>Incomplete</button>
          <button>Trash</button>
        </section>
      </nav>

      <section className="my-10 rounded-sm">
        <div className="w-full bg-amber-50/75 h-50 flex justify-center items-center">
          <h1 className=" text-2xl font-bold">No Data</h1>
        </div>
      </section>

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
      <section className="bg-amber-700 p-4">
        <div className="flex items-center gap-2 my-3">
          <button className="bg-amber-800/90 rounded-full w-8 h-8 flex justify-center items-center">
            {'<'}
          </button>
          <h1 className=" text-2xl">Titkle Text</h1>
        </div>
        <div className=" bg-amber-400 p-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quo ipsam saepe
            perspiciatis odio voluptatibus maiores alias, debitis iure? Repellendus quibusdam
            ratione sit nam quos reiciendis itaque quam. Quis debitis eos id sunt explicabo quia
            accusamus, dolore illum dicta doloremque repudiandae dignissimos eum tempora earum
            repellendus tempore aperiam, nihil voluptate corporis fugit alias rerum magni! Voluptas
            ipsa deleniti nobis sint, doloremque adipisci facere, est nihil sed a, quidem itaque
            pariatur ad magnam. Accusantium fugiat omnis debitis eveniet consectetur, voluptate rem
            veritatis eligendi doloribus a vero non incidunt repudiandae iure rerum tempora
            excepturi iusto consequuntur nam, et animi aperiam, totam quam. Quia voluptatibus
            exercitationem numquam facilis illo temporibus veritatis explicabo asperiores maxime
            harum adipisci deserunt, hic atque. Adipisci deleniti architecto vero. Iste possimus
            ducimus reprehenderit cum vero consequatur laborum exercitationem voluptatum dolor
            dolorum tenetur, vitae quibusdam perferendis autem voluptates. Expedita, est?
            Accusantium facere tenetur placeat a repudiandae repellendus vitae neque. Voluptates ab
            iusto ad perferendis perspiciatis animi. Animi, maiores optio ex eum harum molestiae
            provident explicabo pariatur tempora fugit. Natus ut sit quas odio eum laboriosam hic
            alias praesentium commodi consectetur amet non excepturi quis quasi ad quibusdam,
            dignissimos dolores corporis in neque esse, sed laudantium molestiae? Earum odit, fugit
            voluptas suscipit ex optio facilis soluta cum, nihil ipsam quos tempore. Distinctio
            inventore totam ducimus recusandae similique, asperiores itaque ut sequi veritatis animi
            reiciendis consequatur amet labore cupiditate libero sed aliquid. Consectetur accusamus
            sint a unde dolore corrupti dolorum magnam? Ab nobis vel odio delectus quisquam
            veritatis dignissimos. Doloribus repudiandae odio beatae excepturi corporis veniam,
            ipsum, numquam natus non distinctio voluptas sed? Officiis eaque veritatis maxime vero
            ullam molestiae minus, reiciendis laudantium quod quasi nulla quam numquam. Iste natus
            iure assumenda aut mollitia expedita sit ipsam suscipit eaque aspernatur necessitatibus
            fuga eum, vitae modi asperiores minus consequuntur error laboriosam dolor, veniam eius
            saepe quas. Tempore neque ea esse repellat, quisquam dolores eligendi? Dicta aspernatur
            deleniti exercitationem corrupti consectetur nobis quasi consequuntur saepe dolorem,
            commodi ab illum minus sunt porro reiciendis fugit id, unde quaerat maiores totam, nemo
            quo fugiat dolores tempora? Tenetur magnam tempora, fugit molestias expedita, blanditiis
            id esse sed dolorem alias veritatis, nisi ullam in velit? Libero, ullam enim. Ullam
            doloremque quasi sapiente culpa nisi magni voluptatem modi ad voluptas cum excepturi
            praesentium officiis ut eaque nam optio, amet aliquam, deleniti consectetur corrupti
            dolor. In enim dicta adipisci perspiciatis, vero accusantium molestias quasi repudiandae
            numquam dolore odit distinctio quisquam, vel quia quam ratione praesentium, ipsam quae
            sunt eaque corrupti doloribus officiis. Dolorem sed ipsum officiis quod pariatur eveniet
            nisi dolores consequatur aliquid, ratione, sint deserunt labore magnam, tempora est
            veniam doloribus distinctio. Consequuntur veritatis dolorum iure molestias. Nulla libero
            vero quaerat officia, ullam a error in provident velit quasi facere at quos tempore
            reiciendis aperiam praesentium omnis! Corporis veritatis pariatur totam, facere modi
            veniam laborum nesciunt eum adipisci! Quisquam voluptatem, sint quibusdam nihil ullam
            quaerat necessitatibus, facilis deserunt recusandae eum corrupti animi at. Ea quidem,
            odio sunt natus amet molestias. Odit error atque laboriosam veritatis, quidem facere
            quis similique!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
