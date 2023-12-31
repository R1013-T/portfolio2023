import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Mail() {
  return (
    <div>
      <a href="mailto:takahashi.ryunosuke.job@gmail.com">
        <EnvelopeIcon className="h-7 w-7 lg:h-9 lg:w-9" />
      </a>
    </div>
  )
}
