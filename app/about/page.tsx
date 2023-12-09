import BackButton from '../_components/main/common/back-button'
import Hobby from '../_components/main/items/about/detail/hobby'
import Profile from '../_components/main/items/about/detail/profile'
import Skill from '../_components/main/items/about/detail/skill'
import Town from '../_components/main/items/about/detail/town'

export default function AboutPage() {
  return (
    <article className="h-dvh overflow-y-auto pb-24">
      <div className="h-12 lg:h-0"></div>
      <BackButton href="/" />
      <main className="px-3 pb-20 lg:pb-3">
        <Profile />
        <Skill />
        <Town />
        <Hobby />
      </main>
    </article>
  )
}
