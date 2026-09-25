import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
    return (
      <div className="md:mx-10 mt-40 text-sm">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
          {/* Logo & Description */}
          <div>
            <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
  
          {/* Company Links */}
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="space-y-2 text-gray-600">
              <li>+0-000-000-000</li>
              <li>abc@gmail.com</li>
            </ul>
          </div>
        </div>
  
        {/* Footer */}
        <div>
          <hr />
          <p className="py-5 text-center text-gray-600">
            Copyright 2025 @ docops.dev - All Rights Reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  