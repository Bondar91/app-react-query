import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDelete, MdEdit } from "react-icons/md";
import { getUsersService } from "../services/get-users-service";
import { AxiosError } from "axios";
import { GetUsersResponse } from "../models";
import { CreateUser } from "./create-user";
import { deleteUserService } from "../services/delete-user-service";
import { useGetUsers } from "../hooks/use-get-users";

export const UsersList = () => {
  const {
    isLoading,
    data: usersList,
    isError,
    error,
  } = useQuery<GetUsersResponse, AxiosError>(["users"], async () =>
    getUsersService(), 
    {
      cacheTime: 500
    }
  );
  

  
  // const {isLoading, data: usersList, isError, error } =  useGetUsers();
  

  const queryClient = useQueryClient();

  const { mutate, isSuccess, reset } = useMutation(deleteUserService);

  let history = useHistory();

  const handleEdit = (id: number) => {
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries(["users"]);
      toast("User removed!", { type: "success", autoClose: 2000 });
      reset();
    }
  }, [isSuccess, queryClient, reset]);

  if (isError && error) {
    if(error instanceof Error) {
      return <div>{error.message}</div>;
    }
  }

  return (
    <>
      <CreateUser />
      <div className="users-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="list">
            {usersList?.data.map((user: any) => {
              return (
                <div className="list-item" key={user.id}>
                  <b>{user.name}</b> {user.email}
                  <div className="buttons-container">
                    <button
                      className="icon-btn"
                      onClick={() => mutate({ userId: user.id })}
                    >
                      <MdDelete className="icon" />
                    </button>

                    <button
                      className="icon-btn"
                      onClick={() => handleEdit(user.id)}
                    >
                      <MdEdit className="icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};