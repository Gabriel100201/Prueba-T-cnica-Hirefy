import { Header } from "./components/global-components/Header"
import { Releases } from "./components/sections/Releases"
import { ReleasesNotes } from "./components/sections/ReleasesNotes"

import './index.css'
function App() {
  return (
    <main className="mb-[100px]">
      <Header></Header>
      <div className="flex flex-col xl:flex-row xl:px-[220px]">
      <Releases></Releases>
      <ReleasesNotes></ReleasesNotes>
        <div className="px-[35px] w-full mt-[40px] xl:block hidden"></div>
      </div>
    </main>
  )
}

export default App
