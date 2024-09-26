import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion"; // Ensure these paths are correct
  
  const faqData = [
    {
      question: "What is the Grand Music Fest?",
      answer:
        "The Grand Music Fest is an annual celebration of music featuring artists from various genres and backgrounds. Join us for unforgettable performances and experiences!",
    },
    {
      question: "Where is the event held?",
      answer: "The event takes place at the Downtown Music Park, located at 123 Main St, Music City.",
    },
    {
      question: "When does the festival start?",
      answer: "The festival runs from September 30 to October 2, 2024.",
    },
    {
      question: "How can I purchase tickets?",
      answer: "Tickets can be purchased through our website. Early bird discounts are available!",
    },
    {
      question: "Is there an age limit for attending?",
      answer: "The festival is family-friendly, and children under 12 can enter for free with an adult.",
    },
    {
      question: "What should I bring to the festival?",
      answer: "We recommend bringing sunscreen, a hat, comfortable shoes, and a reusable water bottle.",
    },
  ];
  
  export default function FAQ() {
    return (
      <main className="py-16 px-8 bg-gray-100">
        <section className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="multiple"> {/* Change to "multiple" for multiple open */}
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-md text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    );
  }
  