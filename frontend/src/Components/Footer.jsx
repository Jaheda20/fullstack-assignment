
const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 mt-12">
            <div className="container mx-auto grid grid-cols-5">
                <div>
                    <h3 className="text-lg font-bold mb-2">Abstract</h3>
                    <p className="font-bold text-sm">Branches</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Resources</h3>
                    <ul>
                        <li className="font-bold text-sm">Blog</li>
                        <li className="font-bold text-sm">Help Center</li>
                        <li className="font-bold text-sm">Release Notes</li>
                        <li className="font-bold text-sm">Status</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Community</h3>
                    <ul>
                        <li className="font-bold text-sm">Twitter</li>
                        <li className="font-bold text-sm">LinkedIn</li>
                        <li className="font-bold text-sm">Facebook</li>
                        <li className="font-bold text-sm">Dribble</li>
                        <li className="font-bold text-sm">Podcast</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Company</h3>
                    <ul>
                        <li className="font-bold text-sm">ABout us</li>
                        <li className="font-bold text-sm">Career</li>
                        <li className="font-bold text-sm">Legal</li>
                        
                    </ul>
                    <h4 className="font-bold mt-8">Contact Us</h4>
                    <p className="text-sm font-bold">info@abstract.com</p>
                </div>
                <div className="mt-44">
                    <p>&copy; Copyright 2002</p>
                    <p>Abstract Studio Design, Inc.</p>
                    <p>ALl rights reserved</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;