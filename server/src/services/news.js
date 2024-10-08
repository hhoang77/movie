import News from "../models/news.js";
import createHttpError from "http-errors";

const getAllNews = async () => {
  try {
    return await News.find();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createNews = async ({ tieuDe, hinhAnh, noiDung }) => {
  try {
    return await News.create({ tieuDe, hinhAnh, noiDung });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateNews = async (id, { tieuDe, hinhAnh, noiDung }) => {
  try {
    const news = await News.findById(id);
    if (!news) {
      throw Error("News Not Found");
    }
    return await News.findByIdAndUpdate(
      id,
      { tieuDe, hinhAnh, noiDung },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteNews = async (id) => {
  try {
    const news = await News.findById(id);
    if (!news) {
      throw createHttpError(404, "News Not Found");
    }
    return await News.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const newsService = {
  getAllNews,
  updateNews,
  createNews,
  deleteNews,
};
