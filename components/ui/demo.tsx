
import { ThreeDPhotoCarousel } from "./3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full">
      <div className="min-h-[500px]  flex flex-col justify-center  border-dashed rounded-lg space-y-4">
        <div className="p-2">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
}