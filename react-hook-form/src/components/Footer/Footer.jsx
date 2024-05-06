import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Site Information */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Site Information</h3>
                        <div className="mb-2">
                            <Link to='/about' className="block text-gray-300 hover:text-white">About Us</Link>
                        </div>
                        <div className="mb-2">
                            <Link to='/contact' className="block text-gray-300 hover:text-white">Contact Us</Link>
                        </div>
                        <div className="mb-2">
                            <Link to='/terms-of-service' className="block text-gray-300 hover:text-white">Terms of Service</Link>
                        </div>
                        <div>
                            <Link to='/privacy-policy' className="block text-gray-300 hover:text-white">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com" target='_blank' className="text-gray-300 hover:text-white">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-11306395-9343826.png" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com" target='_blank' className="text-gray-300 hover:text-white">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-11306396-9343827.png" alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/" target='_blank' className="text-gray-300 hover:text-white">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-instragram-11306394-9343825.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a href="https://www.youtube.com" target='_blank' className="text-gray-300 hover:text-white">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-11306399-9343830.png?f=webp&w=256" alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Other Information */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold mb-4">Other Information</h3>
                        <div className="mb-2">
                            <p className="text-gray-300">FAQ</p>
                        </div>
                        <div className="mb-2">
                            <p className="text-gray-300">Customer Support</p>
                        </div>
                        <div>
                            <p className="text-gray-300">Shipping & Returns</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center">
                    <p className="text-sm">&copy; 2024 Your Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
