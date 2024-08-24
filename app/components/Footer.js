import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 BrandName. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#facebook" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
