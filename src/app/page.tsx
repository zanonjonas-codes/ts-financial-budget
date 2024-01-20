export default function Home(): JSX.Element {
  return (
    <main>
      <div className="grid grid-cols-1 gap-2 p-3 justify-items-center">
        <div>
          <input className="rounded-md h-10" />
        </div>
        <div>
          <input className="rounded-md h-10" />
        </div>
        <div>
          <button className="btn btn-primary rounded-md h-10">Login</button>
        </div>
      </div>
    </main>
  )
}
