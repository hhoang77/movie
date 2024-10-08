import React, { useEffect, useState } from "react";
import SliderCustom from "../../../components/SliderCustom/SliderCustom";
import ModalCustom from "../../../components/modal/Modal";
import { EventAndSaleStore } from "../../../store/EventAndSale";

function Sale() {
  const { saleData, getAllSale } = EventAndSaleStore();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllSale();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const responsiveSettings = [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 493,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ];

  return (
    <div>
      <div id="sale" className="max-w-[1050px] mx-auto text-white">
        <p className="font-bold text-2xl py-4 text-center">Khuyến mãi</p>
        <div className="w-full">
          <SliderCustom
            dots={true}
            showSlider={3}
            showSliderScroll={1}
            responsiveSettings={responsiveSettings}
          >
            {saleData.length > 0 &&
              saleData.map((item, index) => (
                <div key={index} className="px-[12px] pb-[30px] relative">
                  <img
                    onClick={() => handleOpenModal(item)}
                    className="rounded-lg"
                    src={item.hinhAnh}
                    alt={item.id}
                  />
                  <p
                    style={{ color: "#B2EC0F" }}
                    className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
                  >
                    {item.tieuDe}
                  </p>
                  <p className="text-sm">
                    Thời gian khuyến mãi: {item.thoiGian}
                  </p>
                </div>
              ))}
          </SliderCustom>
          {selectedItem && (
            <ModalCustom
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Sale;
