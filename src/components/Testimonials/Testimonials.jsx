import "./Testimonials.css";
import {Swiper,SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import   "swiper/css/pagination";
import   "swiper/css";
// import profilePic1 from "../../img/profile1.jpg";
// import profilePic2 from "../../img/profile2.jpg";
// import profilePic3 from "../../img/profile3.jpg";
// import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
const clients = [
    {
        title:"Frontend Skill",
        img:"Html",
        skill:"ReactJs,NextJs,Redux,React-Router,Typescript,JavaScript,Tailwind CSS,Bootstrap,JQuery,Html,Css"
    },
    {
      title:"Backend  Skill",
      img:"php",
      skill:"NodeJs,ExpressJS,Php"
    },
    {
      title:"Database",
      img:"Mysql",
      skill:"Mysql,MongoDB"
    },
    
]


  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span >You can get</span>&emsp;
        <span>Skills</span>&emsp;
        <span>From me...</span>
        
      </div>
      <div
        className="blur t-blur1"
        style={{ background: "var(--purple)" }}
      ></div>
      <div
        className="blur t-blur2"
        style={{ background: "skyblue" }}
      ></div>

      {/* slider */}
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
        {clients.map((client,index) => {
            return(
                <SwiperSlide key={index}>
                    <div className="testimonial">
                    {/* <img src={client.img} alt="clientname" /> */}
                    <h1>{client.title}</h1>
                    <span>{client.skill}</span>
                    </div>

                </SwiperSlide>
            )
        })}

        </Swiper>

    </div>
  );
};

export default Testimonials;
