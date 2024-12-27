export default class Forecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;

  constructor(
    date: string,
    temperatureC: number,
    temperatureF: number,
    summary: string
  ) {
    this.date = date;
    this.temperatureC = temperatureC;
    this.temperatureF = temperatureF;
    this.summary = summary;
  }
}
