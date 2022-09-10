import Detail from "./Detail"
import Dropdown from "./Dropdown"

function Main() {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Türkiye Weather App</h2>
      <div>
        <Detail />
        <Dropdown />
      </div>
    </div>
  )
}

export default Main