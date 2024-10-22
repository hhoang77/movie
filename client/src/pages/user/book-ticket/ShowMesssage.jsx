import React from "react";
import Overlay from "../../../components/Overlay";
import ModalCustom from "../../../components/Modal";

function ShowMessage() {
  const handleLoad = () => {
    window.location.reload();
  };

  return (
    <ModalCustom iconClose={false}>
      <div className="relative items-center mx-auto">
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-opacity-50">
          <div className="p-10 bg-white rounded-2xl">
            <p>
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời
              hạn 100 Giây.{" "}
              <span
                onClick={handleLoad}
                className="text-red-700 cursor-pointer hover:opacity-60 my-2"
              >
                Đặt vé lại
              </span>
            </p>
          </div>
        </div>
      </div>
      <Overlay />
    </ModalCustom>
  );
}

export default ShowMessage;
