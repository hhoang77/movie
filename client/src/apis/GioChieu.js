import { axiosConfig } from "../axiosConfig";

export const getAllGioChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/gioChieu/",
  });
};

export const getGioChieuByMovie = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/gioChieu/getByMovieId/?movieId=${id}`,
  });
};

export const getGioChieuById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/gioChieu/getById?id=${id}`,
  });
};

export const createGioChieu = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/gioChieu/create/",
    data,
  });
};

export const deleteGioChieu = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/gioChieu/delete/?id=${id}`,
  });
};
