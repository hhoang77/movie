import React, { useEffect } from "react";
import { reviewStore } from "../../../store/reviewStore";
import Rating from "../../../components/ratting";
import ShowMore from "../../../components/showMore";

function Comment(props) {
  const movieId = props.data;
  const { data, isLoading, getReviewByMovie } = reviewStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getReviewByMovie(movieId);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [movieId]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        <>
          {data.map((item, index) => (
            <div className="text-black  m-auto bg-white max-h-[250px] border-[1px] border-solid mb-[15px] rounded w-[90%] pt-2 py-3 px-5 max-w-[580px]">
              <div className="my-2" key={index}>
                <div className="flex justify-between">
                  <div>
                    <span className="inline-block">
                      <img
                        className="w-9 h-9 rounded-3xl"
                        src={
                          item.avarta ||
                          "https://i.pravatar.cc/150?u=hdchgfwed123dfg"
                        }
                        alt="avatar"
                      />
                    </span>
                    <span className="inline-block ml-3">
                      <p className="text-black text-sm font-medium capitalize">
                        {item.userId.username}
                      </p>
                      <p>1 tuần trước</p>
                    </span>
                  </div>
                  <div className="float-right">
                    <Rating rating={item.ratting} disabled={true} />
                  </div>
                </div>
                <div
                  style={{ borderBottom: "1px solid #dee2e6" }}
                  className="py-2"
                >
                  <p className="mb-0 text-base">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="max-w-[100px] m-auto">
            <ShowMore data={data} />
          </div>
        </>
      ) : (
        <div className="text-black  m-auto bg-white max-h-[250px] border-[1px] border-solid mb-[15px] rounded w-[90%] pt-2 py-3 px-5 max-w-[580px]">
          <p className="font-semibold mx-auto text-center">
            Hãy là người đánh giá bộ phim đầu tiên
          </p>
        </div>
      )}
    </div>
  );
}

export default Comment;
