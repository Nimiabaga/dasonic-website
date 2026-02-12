export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-padded py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium">Dasonic</p>
            <p className="text-xs text-slate-500">
              Replace this placeholder with the official tagline from the company profile.
            </p>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dasonic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
