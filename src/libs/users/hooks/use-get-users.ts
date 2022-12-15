import { useQuery } from "@tanstack/react-query";
import { getUsersService } from "../services/get-users-service";

export const useGetUsers = () => {
  const { isLoading, isError, ...rest } = useQuery(
    ["users"],
    () => getUsersService()
  );

  return {
    isLoading,
    isError,
    ...rest,
  };
};