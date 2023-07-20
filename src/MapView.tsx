import Map from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { useContext, useEffect, createContext } from 'react';


export const MapContext = createContext<React.MutableRefObject<Map | null> | null>(null);

const useOlEventProvider = () => {
  const mapRef = useContext(MapContext);

  useEffect(() => {
    if (mapRef && mapRef?.current !== null) {
      console.log(mapRef.current)
      const handler = (e: MapBrowserEvent<UIEvent>) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(e.coordinate)
      }
      if (mapRef.current) {
        mapRef.current.on('click', handler)
      }
      return () => {
        if (mapRef.current) {
          mapRef.current.un('click', handler)
        }
      }
    }
  }, [mapRef])
}

export const MapView = () => {
  const mapRef = useContext(MapContext);

  useEffect(() => {
    // init map
    if (mapRef?.current === null) mapRef.current = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }, [mapRef]);
  useOlEventProvider();
 
  return (
    <div id='map' style={{ width: '100vh', height: '100vh' }}></div>
  );
}

export default MapView;