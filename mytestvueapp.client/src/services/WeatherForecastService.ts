import type Forecast from "@/entitites/Forecast";
import FetchAPIService from "./FetchAPIService";

export default class WeatherForecastService {
  //Get all forecasts
  public static async GetWeatherForecast(): Promise<Forecast[]> {
    return FetchAPIService.get("/WeatherForecast/GetAllForecasts").then(
      (data) => {
        return data as Forecast[];
      }
    );
  }
}
