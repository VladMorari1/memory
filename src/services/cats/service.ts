import { ApiResponse } from "apisauce";
import _RestApiService from "../api";
import { ICard } from "../../interfaces/card";

const catsApi = new _RestApiService("https://api.thecatapi.com");

export class _CatsApiService {
  public getCats(limit: number): Promise<ApiResponse<ICard[]>> {
    return catsApi.get(`/v1/images/search`, { limit });
  }
}

export const CatsApiService = new _CatsApiService();
