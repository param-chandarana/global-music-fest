import TicketForm from "@/components/tickets/TicketForm"

const Tickets = () => {
  return (
    <main>
        <section className="py-16 px-8 bg-gray-100">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Book Your Tickets</h2>
            <TicketForm />
            </div>
        </section>
    </main>
  )
}

export default Tickets