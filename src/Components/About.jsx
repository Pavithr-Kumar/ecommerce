import React from "react";

import "./Navbar.css";
function About() {
  return (
    <div>
      <div className="w-11/12 mx-auto flex p-11">
        <div className="w-5/12">
          <img
            id="about"
            className=""
            src="https://i.ibb.co/j6x9QNq/about.png"
            alt=""
          />
        </div>
        <div className="w-7/12">
          <h1 className="text-2xl text-emerald-500 mb-6 font-bold">
            About ShopMe
          </h1>
          <p>
            Welcome to ShopMe, your ultimate online shopping destination! At
            ShopMe, we're dedicated to providing you with an unparalleled
            shopping experience that combines convenience, variety, and
            unbeatable prices. Our mission is to make every shopping journey
            memorable, effortless, and rewarding for you.
          </p>
          <h2 className="text-xl text-emerald-500 mt-6 mb-3 font-bold">
            Our Story
          </h2>
          <p>
            ShopMe was founded by a team of passionate individuals who shared a
            common vision - to transform the way people shop online. We started
            this journey with a simple goal in mind: to create a one-stop-shop
            where you can find everything you need, from the latest fashion
            trends to cutting-edge gadgets, all under one virtual roof.
          </p>
          <p>
            Over the years, ShopMe has evolved into a thriving e-commerce
            platform, serving millions of customers worldwide. Our growth is a
            testament to our commitment to innovation, customer satisfaction,
            and our belief in the power of online shopping to enhance lives.
          </p>
          <h2 className="text-xl text-emerald-500 mt-6 mb-3 font-bold">
            What Sets Us Apart
          </h2>
          <p>
            <strong>Exceptional Product Selection:</strong> Exceptional Product
            Selection: ShopMe offers an extensive range of products, carefully
            curated to cater to your every need and desire. Whether you're
            looking for the hottest fashion styles, top-notch electronics, home
            essentials, or unique gifts, we've got you covered.
          </p>
          <p>
            <strong>Competitive Prices:</strong> Competitive Prices: We
            understand the importance of getting great value for your money.
            That's why we work tirelessly to offer competitive prices and
            exclusive deals on a wide array of products.
          </p>
          <p>
            <strong>User-Friendly Experience:</strong> User-Friendly Experience:
            Navigating through ShopMe is a breeze. Our user-friendly website and
            mobile app ensure a seamless shopping experience, from browsing to
            checkout.
          </p>
          <p>
            <strong>Secure Shopping:</strong> Secure Shopping: Your security
            matters to us. We employ the latest encryption and security measures
            to protect your personal information and payment details, ensuring
            that your shopping experience is safe and worry-free.
          </p>
          <p>
            <strong>Customer Support:</strong> Our dedicated customer support
            team is always here to assist you. Whether you have questions about
            a product, need help with an order, or want to provide feedback,
            we're just a click or call away.
          </p>
          <h2 className="text-xl text-emerald-500 mt-6 mb-3 font-bold">
            Our Vision
          </h2>
          <p>
            We envision a world where shopping is not just a transaction but an
            experience that brings joy and convenience to your life. We strive
            to constantly innovate and adapt to meet the ever-evolving needs of
            our customers. Our commitment to sustainability and responsible
            business practices is an integral part of our vision, ensuring that
            your choices at ShopMe have a positive impact on the world.
          </p>
          <h2 className="text-xl text-emerald-500 mt-6 mb-3 font-bold">
            Join the ShopMe Community
          </h2>
          <p>
            At ShopMe, we believe in the power of community. Join us on social
            media to stay updated with the latest trends, product launches, and
            exclusive offers. Become a part of the ShopMe family, and let's
            embark on this exciting shopping journey together.
          </p>
          <h4 className="my-6 font-medium text-emerald-500">
            Thank you for choosing ShopMe. We look forward to serving you and
            making your online shopping experiences truly remarkable. Happy
            shopping!
          </h4>{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
