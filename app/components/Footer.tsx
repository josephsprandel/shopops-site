export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">ShopOps</h3>
            <p className="text-sm leading-relaxed">
              AI-powered shop management built for auto repair shops tired of legacy software.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/jsprandel/shopops3" className="hover:text-teal-400 transition-colors">GitHub</a></li>
              <li><a href="#features" className="hover:text-teal-400 transition-colors">Features</a></li>
              <li><a href="mailto:service@autohousenwa.com" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Built by */}
          <div>
            <h3 className="text-white font-bold mb-4">Built By</h3>
            <p className="text-sm">
              <a href="https://autohousenwa.com" className="hover:text-teal-400 transition-colors">
                AutoHouse Automotive
              </a>
              <br />
              Northwest Arkansas
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ShopOps. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
