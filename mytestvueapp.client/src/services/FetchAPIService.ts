export default class FetchAPIService {
  //Standard implementation of a get request
  static async get(url: string): Promise<any> {
    let response;
    try {
      response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Network Error in FetchAPI Service: ", error);
      throw error;
    }

    try {
      if (response) {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      throw new Error("Error parsing JSON");
    }
  }
}
