import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need any coding skills to use LaunchFast?",
    answer:
      "Not at all! LaunchFast is designed for non-technical users. Our drag-and-drop editor makes it easy to build beautiful landing pages without writing a single line of code.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes! Pro and Team plans include custom domain support with automatic SSL certificates. Simply connect your domain in our settings, and we'll handle the rest.",
  },
  {
    question: "What happens after the 14-day trial?",
    answer:
      "After your trial ends, you can choose to upgrade to a paid plan or continue using our Free tier. Your pages won't be deleted, but some features may be limited on the Free plan.",
  },
  {
    question: "Can I export my landing pages?",
    answer:
      "Yes, Pro and Team users can export their pages as clean HTML, CSS, and JavaScript files. This gives you full ownership of your code if you ever decide to move.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied for any reason, contact our support team for a full refund.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently asked questions</h2>
          <p className="text-muted-foreground text-lg">Got questions? We&apos;ve got answers.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
