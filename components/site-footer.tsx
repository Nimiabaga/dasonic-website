export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--dark-blue)] text-white">
      <div className="container-padded py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-bold text-white">
              <span className="text-4xl font-black">D</span>asonic and Company Nigeria Ltd
            </p>
            <p className="mt-4 text-base text-white/80 leading-relaxed max-w-sm">
              Engineering excellence to improve lives sustainably. Delivering world-class solutions across Nigeria 
              since 1997.
            </p>
          </div>
          <div className="text-sm text-white/80">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white mb-4">Head office</p>
            <p className="leading-relaxed">33, Mission Road, Bonny,<br />Rivers State, Nigeria.</p>
          </div>
          <div className="text-sm text-white/80">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white mb-4">Contact</p>
            <p className="mt-2">+234 803 733 7547</p>
            <p className="mt-2">dasonicandcoy@yahoo.com</p>
            <p className="mt-2">www.dasonicandcompany.com</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>Committed to safety, sustainability, and local content development.</span>
          <span>© {new Date().getFullYear()} Dasonic and Company Nigeria Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
