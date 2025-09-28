export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-xl">Tranzmit</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Qualitative Research Conducted by AI
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 Tranzmit AI. All rights reserved.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Concept Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Survey Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  User Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Market Research
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Personality Test
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  What's New
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
            
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Tranzmit AI helps companies understand their customers through intelligent qualitative research.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Status
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Security
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                API
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
