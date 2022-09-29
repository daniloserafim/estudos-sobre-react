import { useState } from "react"
import { Tweet } from "./components/Tweet"
import { TempTitle } from "./components/TempTitle"
import { AppRoutes } from "./Routes"

function App() {

  const [visible, setVisible] = useState(true);
  
  setTimeout(() => {
    setVisible(false);
  }, 5000);

  return ( visible &&
    <div>
      <AppRoutes />
      <TempTitle />
    </div>
  )
}

export default App
