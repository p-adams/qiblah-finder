import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeodesicLine as LeafletGeodesicLine } from "leaflet.geodesic";

function GeodesicPolyline({
  positions = [
    [37.548271, -121.988571],
    [21.422487, 39.826206],
  ],
}) {
  const map = useMap();
  useEffect(() => {
    const geodesicPolyline = new LeafletGeodesicLine(positions, {
      wrap: false,
    }).addTo(map);
    return () => {
      geodesicPolyline.remove();
    };
  }, [map]);
  return null;
}

export default GeodesicPolyline;
