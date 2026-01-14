type CarouselProgressProps = {
  current: number
  count: number
  onSelect?: (index: number) => void
}

export const CarouselProgress = ({
  current,
  count,
  onSelect,
}: CarouselProgressProps) => {
  if (count <= 1) return null

  const trackWidth = 40 // px
  const thumbSize = 10 // px

  const maxX = trackWidth - thumbSize
  const x = count > 1 ? (current / (count - 1)) * maxX : 0

  return (
    <div
      className="relative mx-auto mt-4 h-[40px] w-[40px] cursor-pointer md:hidden"
      onClick={(e) => {
        if (!onSelect) return

        const rect = e.currentTarget.getBoundingClientRect()
        const percent = (e.clientX - rect.left) / rect.width
        const index = Math.round(percent * (count - 1))

        onSelect(index)
      }}
    >
      {/* TRACK */}
      <div
        className="absolute left-0 top-1/2 h-[5px] w-full rounded-full bg-black/30"
        style={{
          transform: 'translateY(-50%)',
        }}
      />

      {/* THUMB – kulička */}
      <div
        className="absolute top-1/2 h-[10px] w-[10px] rounded-full bg-button transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${x}px, -50%)`,
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
        }}
      />
    </div>
  )
}
