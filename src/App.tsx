import { createContext, useRef, useState } from 'react'
import MapView, { MapContext } from './MapView'
import { Map } from 'ol'
import Header from './Header'
import { Navigation } from './Navigation'

export const ModalContext = createContext({
  navigation: false,
  setNavigation: (value: boolean) => {}
})

const Modals = [<Navigation />];

function App() {
  const [navigation, setNavigation] = useState(false)
  // react ref = 렌더링에 영향 없는 값 (외부 라이브러리 상태 저장 / DOM 접근) / vue ref = useState
  const mapRef = useRef<Map | null>(null)

  return (
    <MapContext.Provider value={mapRef}>
      <ModalContext.Provider value={{ navigation, setNavigation }}>
        <Header />
        <MapView />
        {Modals}
      </ModalContext.Provider>
    </MapContext.Provider>
  )
}

export default App
