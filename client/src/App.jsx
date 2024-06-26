import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Home from "./pages/user/home/Home";
import MovieDetail from "./pages/user/movie-detail/MovieDetail";
import News from "./pages/user/news/News";
import HeThongRap from "./pages/user/he-thong-rap/HeThongRap";
import EventAndSale from "./pages/user/event-sale/EventAndSale";
import LichChieu from "./pages/user/lich-chieu/LichChieu";
import Rap from "./pages/user/rap-detail/RapDeatail";
import Layout from "./templates/Layout";

import Profile from "./pages/user/profile/Profile";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import BookTicket from "./pages/user/book-ticket/BookTicKet";
import ForgotPassword from "./pages/user/ForgotPassword";
import ResetPassword from "./pages/user/ResetPassword";
import NotFound from "./pages/user/not-found/NotFound";

function App() {
  return (
    <Routes>
      <Route path={PATH.LAYOUT} element={<Layout />}>
        <Route path={PATH.HOME} index element={<Home />} />
        <Route path={PATH.MOVIE} element={<MovieDetail />} />
        <Route path={PATH.TINTUC} element={<News />} />
        <Route path={PATH.HETHONGRAP} element={<HeThongRap />} />
        <Route path={PATH.RAP} element={<Rap />} />
        <Route path={PATH.EVENTANDSALE} element={<EventAndSale />} />
        <Route path={PATH.LICHCHIEU} element={<LichChieu />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
      </Route>
      <Route path={PATH.DATVE} element={<BookTicket />} />
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISTER} element={<Register />} />
      <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={PATH.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
