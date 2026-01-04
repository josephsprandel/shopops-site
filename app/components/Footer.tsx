export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">ShopOps</h3>
            <p className="text-base leading-relaxed">
              Enterprise automotive intelligence platform
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-4">Platform</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#platform" className="hover:text-teal-400 transition-colors">Features</a></li>
              <li><a href="#integrations" className="hover:text-teal-400 transition-colors">Integrations</a></li>
              <li><a href="#api" className="hover:text-teal-400 transition-colors">API Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-4">Company</h3>
            <p className="text-base">
              <a href="mailto:partnerships@shopops.ai" className="hover:text-teal-400 transition-colors">
                partnerships@shopops.ai
              </a>
              <br />
              <span className="text-slate-500">Northwest Arkansas</span>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 text-center">
          <p className="text-base">© {new Date().getFullYear()} ShopOps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
