import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const testParamsChange = () => {
    setSearchParams({ lat: "23", lng: "50" });
  };

  const moveToForm = () => {
    navigate("form");
  };

  return (
    <div className={styles.mapContainer} onClick={moveToForm}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>

      <button onClick={testParamsChange}>Change props</button>
    </div>
  );
}
