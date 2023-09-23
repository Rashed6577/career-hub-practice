import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#1A1919] w-full'>
            <footer className='container mx-auto py-16 px-10'>
                <div className="footer mb-12 justify-between">
                    <aside>
                        <h2 className="text-[#fff] text-4xl font-extrabold">CareerHub</h2>
                        <p className="text-[#FFFFFFB3] w-80 mt-5 mb-2">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="flex gap-4">
                            <FaFacebook className='text-white bg-blue-700 rounded-full text-4xl'></FaFacebook>
                            <FaTwitter className='bg-white text-blue-500 rounded-full text-4xl'></FaTwitter>
                            <FaInstagram className='bg-white text-rose-500 rounded-full text-4xl'></FaInstagram>
                        </div>
                    </aside>
                    <nav>
                        <header className="text-xl font-semibold text-[#FFF] mb-3">Company</header>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">About Us</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Work</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Latest News</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Careers</a>
                    </nav>
                    <nav>
                        <header className="text-xl font-semibold text-[#FFF] mb-3">Product</header>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Prototype</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Plans & Pricing</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Customers</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Integrations</a>
                    </nav>
                    <nav>
                        <header className="text-xl font-semibold text-[#FFF] mb-3">Support</header>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Help Desk</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Sales</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Become a Partner</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">Developers</a>
                    </nav>
                    <nav>
                        <header className="text-xl font-semibold text-[#FFF] mb-3">Contact</header>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">524 Broadway , NYC</a>
                        <a className="link link-hover text-[#FFFFFFB3] mb-3">+1 777 - 978 - 5570</a>
                    </nav>
                </div>

                <div className="flex flex-col gap-4 md:flex-row justify-between container mx-auto pt-10 border-t-2 border-t-[#FFFFFF66]">
                    <aside className="items-center grid-flow-col">
                        <p className="text-sm font-normal text-[#FFFFFF66]">@2023 <span className="font-semibold">CareerHub</span>. All Rights Reserved</p>
                    </aside>
                    <p className="text-sm font-normal text-[#FFFFFF66]">Powered by <span className="font-bold">CareerHub</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;