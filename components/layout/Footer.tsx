import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-green-900/15 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div >
          <div className="flex items-center gap-2 mb-4">
             <Image
              alt="logo image"
              src="/vision-logo.png"
              width={200}
              height={200}
              className="w-10"
            /> 
            <h2 className="text-white text-lg font-bold mb-2">
              Vision<sup>(Works)</sup>
            </h2>
          </div>

          <h4 className="text-gray-400 tracking-wide">
            Connecting you with trusted local service providers across South Africa.
          </h4>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Repairs</a></li>
            <li><a href="#">Cleaning</a></li>
            <li><a href="#">Moving</a></li>
            <li><a href="#">Tech</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-2">Follow us</h3>
          <div className="flex gap-4">{
            /*
            <Facebook className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
            <Instagram className="cursor-pointer hover:text-white" />
            */
            }
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center text-sm py-4">
        © 2026 ServiceHub. All rights reserved.
      </div>
    </footer>
  );
}