import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <div className='mt-24'>
        <section className="sticky bottom-0 overflow-hidden py-8 bg-gray-400 border-t-2 border-t-black ">
      
        <div className="relative z-10 mx-auto px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-between items-center p-6">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-600">
                &copy; Copyright 2025. All Rights Reserved by Ayush Raj.
              </p>
            </div>
            <div className="flex flex-col justify-start p-6">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start p-6">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start p-6">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Footer;
