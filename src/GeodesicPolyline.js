import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeodesicLine as LeafletGeodesicLine } from "leaflet.geodesic";

function GeodesicPolyline({
  positions = [
    [35.5485, -121.9886],
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
