import { StatusCodes } from "http-status-codes";
import { movieService } from "../services/movie.js";

const getAllMovie = async (req, res, next) => {
  try {
    const movie = await movieService.getAllMovie();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieDangChieu = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieDangChieu();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};
const getMovieSapChieu = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieSapChieu();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieByRap = async (req, res, next) => {
  try {
    const tenRap = req.params.tenRap;
    const movie = await movieService.getMovieByRap(tenRap);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const {
      tenPhim,
      hinhAnh,
      moTa,
      ngayKhoiChieu,
      dangChieu,
      sapChieu,
      daoDien,
      dienVien,
      theLoai,
      quocGia,
      thoiLuong,
      rapId,
    } = req.body;
    const fileHinhAnh = req.file;
    const movie = await movieService.createMovie({
      tenPhim,
      hinhAnh: fileHinhAnh?.path,
      moTa,
      ngayKhoiChieu,
      dangChieu,
      sapChieu,
      daoDien,
      dienVien,
      theLoai,
      quocGia,
      thoiLuong,
      rapId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: movie });
  } catch (error) {
    if (error.statusCode === 409) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ status: 409, message: error.message });
    } else {
      console.log(error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: 500, message: "Server Error" });
      next(error);
    }
  }
};

const updateTrailerMovie = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { trailer } = req.body;
    const fileData = req.file;
    console.log(fileData);
    const movie = await movieService.updateTrailerMovie(id, {
      trailer: fileData?.path,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
  next(error);
};

const deleteMovie = async (req, res, next) => {
  try {
    const id = req.query.id;
    const movie = await movieService.deleteMovie(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieCgvVinCom = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieCgvVincom();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieCgvVinhTrung = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieCgvVinhTrung();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieGalaxyDaNang = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieGalaxyDaNang();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieLotteDaNang = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieLotteDaNang();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieLotteHoiAn = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieLotteHoiAn();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getMovieStarlightDaNang = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieStarlightDaNang();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const movieController = {
  getAllMovie,
  getMovieDangChieu,
  getMovieSapChieu,
  createMovie,
  updateTrailerMovie,
  deleteMovie,
  getMovieCgvVinCom,
  getMovieCgvVinhTrung,
  getMovieGalaxyDaNang,
  getMovieLotteDaNang,
  getMovieLotteHoiAn,
  getMovieStarlightDaNang,
};
