import { axiosConfig } from "../axiosConfig";

export const getAllMovie = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/",
  });
};

export const getAllMovieBySlug = async (slug) => {
  return await axiosConfig({
    method: "get",
    url: `/movie/${slug}`,
  });
};

export const getAllBanner = async () => {
  return await axiosConfig({
    method: "get",
    url: "/banner/",
  });
};

export const getAllMovieSapChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/sapChieu",
  });
};

export const getAllMovieDangChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/dangChieu",
  });
};

export const createMovie = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/movie/create",
    data,
  });
};

export const deleteMovie = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/movie/delete/?id=${id}`,
  });
};
