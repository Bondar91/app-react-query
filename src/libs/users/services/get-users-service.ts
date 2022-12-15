import { AxiosResponse } from "axios";
import { BASE_URL, httpClient } from "../../../http-client";
import { GetUsersResponse } from "../models";

export const getUsersService = async () => {
	const url = `${BASE_URL}/users`;
  const config = {};

  const response = await httpClient({}).get<AxiosResponse<GetUsersResponse>>({
    url,
    config,
  });

  return response.data;
}