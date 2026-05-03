export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-white font-bold text-lg">SunCart</h2>
          <p className="text-sm mt-2">
            Your summer essentials store
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Links</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p>support@suncart.com</p>
        </div>

      </div>

    </footer>
  );
}