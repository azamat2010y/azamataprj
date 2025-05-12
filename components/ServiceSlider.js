// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";


// service data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Я помогу создать уникальный бренд, который отразит вашу компанию или продукт',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Мои дизайны являются современными и привлекательными, чтобы привлечь внимание вашей аудитории',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Я разрабатываю функциональные и адаптивные веб-сайты, которые соответствуют вашим потребностям.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Мои тексты уникальны и эффективно передают ваше сообщение целевой аудитории.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Я оптимизирую сайты для улучшения их позиций в поисковых системах и привлечения большего количества посетителей',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules 
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPrevView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPrevView: 3,
      spaceBetween: 15
    },
  }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
  >
    {
      serviceData.map((item,index)=> {
        return ( 
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icons */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
        )  
      })
    }
    </Swiper>;
};

export default ServiceSlider;
