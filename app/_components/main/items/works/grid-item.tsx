import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

import { fetchWorkItem } from '@/app/_lib/data'

export default async function WorksGridItem({ id }: { id: string }) {
  const item = await fetchWorkItem(id)

  if (!item) return null

  return (
    <div className="h-full w-full relative text-black-2">
      <Image
        src={item.image.url}
        alt={item.name}
        layout="fill"
        objectFit="contain"
        className="rounded-xl scale-50"
      />
      <div className="absolute top-0 left-0 p-3 text-black-1 tracking-wide">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-black-2 text-sm">{item.description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-3">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center justify-center">
            <span
              className={`${
                item.status[0] === 'Done' ? 'bg-green-400' : 'bg-blue-400'
              } h-4 w-4 rounded-full mb-0.5 opacity-70`}
            ></span>
            <p>{item.status[0] === 'Done' ? '完成' : '作成中'}</p>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            {item.url && (
              <a href={item.url} target="_brank" className="cursor-pointer">
                <ArrowTopRightOnSquareIcon className="w-7 h-7" />
              </a>
            )}
            {item.github && (
              <a href={item.github} target="_brank" className="cursor-pointe">
                <Image
                  src="/images/logo/github.svg"
                  height={25}
                  width={25}
                  alt="GitHub"
                />
              </a>
            )}
          </div>
        </div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {item.techs.map((tech, i) => (
            <div key={i}>
              <Image src={tech.url} height={25} width={25} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
