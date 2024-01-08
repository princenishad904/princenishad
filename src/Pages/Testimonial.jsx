import React from "react";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="p-3 my-4">
      <h1 className="text-3xl text-center text-purple-600 font-semibold">
        Testimonial
      </h1>
      <h2 className="text-xl text-center">What our client say about us ?</h2>
      <div className="w-4/5 max-sm:w-full mx-auto my-8">
        <TestimonialCard
          image={
            "https://spacexglobalcorp.com/wp-content/uploads/2018/02/g2-testimonial-male.jpg"
          }
          name={"Ambrose"}
          rating={4}
          qoutes={
            "Is a frontend wizard! With a seamless blend of creativity and technical prowess, every project flourishes under their expertise."
          }
        />
        <TestimonialCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxxqlsZS_2fIR2azfJMAi9ckPy6FgjkiZzw&usqp=CAU"
          }
          name={"Bartholomew"}
          rating={4}
          qoutes={
            "Exemplary frontend developer crafts visually stunning, user-centric interfaces with unparalleled skill. A true asset, consistently exceeding expectations."
          }
        />
        <TestimonialCard
          image={
            "https://images.squarespace-cdn.com/content/v1/54fe35d8e4b034b7a7fa38d8/1507669782910-YHONCM7NO368K174V5GF/linx-dating-testimonial-7.jpg"
          }
          name={"Hosea"}
          rating={5}
          qoutes={
            "Frontend genius effortlessly translates visions into captivating digital experiences. Impeccable skill, creativity, and teamwork – an indispensable force."
          }
        />
        <TestimonialCard
          image={"https://i.ibb.co/jJJPvTB/man.jpg"}
          name={"Eliam"}
          rating={3}
          qoutes={
            "Outstanding frontend maestro elevates projects with a perfect blend of innovation, precision, and collaborative spirit. Invaluable to our team's success!"
          }
        />
      </div>
    </div>
  );
};

export default Testimonial;
