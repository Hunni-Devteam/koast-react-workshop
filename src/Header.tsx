import { useContext } from "react"
import { MapContext } from "./MapView"
import { ModalContext } from "./App"

export const Header = () => {
  const { setNavigation } = useContext(ModalContext)
  const mapRef = useContext(MapContext)

  const handleGoSeoul = () => {
    if (mapRef && mapRef.current) {
      mapRef.current.getView().animate({ center: [14137000.0, 4510000.0], zoom: 10 })
    }
  }

  return (<header style={{ position: 'fixed', left: 0, top: 0, zIndex: 10, width: '100%', height: 'auto' }}>
    <div style={{ backgroundColor: '#00183e', height: '36px', display: 'flex' }}>
      <div style={{ flex: 1 }} />
      <div style={{ background: '#f15a24' }}>(caret)</div>
    </div>
    <div style={{ display: 'flex' }}>
      <img src="/src/assets/logo.png" height="28px" style={{padding: '16px'}} />
      <button onClick={() => setNavigation(true)}>Navigation OPEN</button>
      <button onClick={() => handleGoSeoul()}>서울로 가자..</button>
    </div>
  </header>)
}

export default Header;