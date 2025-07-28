const Footer = () => {
  return (
    <footer className="bg-white text-blue-900 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} WWS Energy. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://wwsenergy.in" target="_blank" className="text-blue-400 underline">
            www.wwsenergy.in
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
