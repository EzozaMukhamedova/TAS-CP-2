export default function MissionStatement() {
  return (
    <section className="py-20 bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="text-3xl">🤝</div>
              <h3 className="text-xl font-semibold">Trust</h3>
              <p className="text-blue-100">
                Building lasting relationships through transparency, reliability, and consistent delivery of promises.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl">🌱</div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-blue-100">
                Creating environmentally responsible developments that benefit communities for generations to come.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl">💎</div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-blue-100">
                Maintaining the highest ethical standards in all our business dealings and professional relationships.
              </p>
            </div>
          </div>
          <blockquote className="text-xl italic text-blue-100">
            "We are committed to transforming real estate through innovation while preserving the values that matter
            most to our communities."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
