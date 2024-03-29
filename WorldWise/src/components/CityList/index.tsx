import styles from "./CityList.module.css";
import Spinner from "../Spinner";
import CityEntry from "../CityEntry";
import Message from "../Message";
import { useCitiesContext } from "@/hooks/useCitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading) return <Spinner />;

  if (!cities.length && !isLoading)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityEntry key={city.id} city={city} />;
      })}
    </ul>
  );
}
