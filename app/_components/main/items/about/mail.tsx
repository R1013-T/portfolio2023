import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Mail() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <a href="mailto:takahashi.ryunosuke.job@gmail.com">
        <EnvelopeIcon className="w-44 h-44" />
      </a>
    </div>
  )
}
