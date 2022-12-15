import { BASE_URL, httpClient } from "../../../http-client";
import { EditUserRequestType } from "../models";

export const editUserService = async ({ id, body }: EditUserRequestType) => {
  const url = `${BASE_URL}/users/${id}`;
  const config = {};

  const response = await httpClient({}).put({ url, body, config });

  return response.data;
};