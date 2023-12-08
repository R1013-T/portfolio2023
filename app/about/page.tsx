import BackButton from '../_components/main/common/back-button'

export default function AboutPage() {
  return (
    <article className="h-full overflow-y-auto mt-2 lg:mt-0">
      <BackButton href="/" />
      <main className="px-3 pb-20 lg:pb-3">
        <section id="profile" className="h-80 border border-red-500">
          Profile
        </section>
        <section id="skill" className="h-80 border border-blue-500">
          Skill
        </section>
        <section id="town" className="h-80 border border-green-500">
          Town
        </section>
        <section id="hobby" className="h-80 border border-orange-500">
          Hobby
        </section>
      </main>
    </article>
  )
}
