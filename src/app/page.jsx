import Header from '../components/Header';


export const metadata = {
  title: "Home",
  description: "Home page",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header/>

      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Diversa</h1>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
              URL
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="url" name="url" placeholder="Indtast URL" required></input>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Check it
          </button>
        </form>

      </div>
    </main>
  );
}