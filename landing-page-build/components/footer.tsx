import { Zap } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Templates", "Pricing", "Changelog"],
  Resources: ["Blog", "Documentation", "Tutorials", "Support"],
  Company: ["About", "Careers", "Contact", "Press"],
  Legal: ["Privacy", "Terms", "Security"],
}

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 border-t border-border bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Zap className="h-6 w-6 text-accent" />
              <span>LaunchFast</span>
            </a>
            <p className="text-sm text-muted-foreground">The fastest way to launch your MVP landing page.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} LaunchFast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
