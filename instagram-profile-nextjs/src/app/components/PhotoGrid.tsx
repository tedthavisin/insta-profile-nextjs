import Image from 'next/image';

export default function PhotoGrid() {
  const photos = Array(9).fill(0).map((_, i) => (
    `https://picsum.photos/300/300?random=${i + 1}`
  ));

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {photos.map((photo, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-lg">
          <Image
            src={photo}
            alt={`Random photo ${index + 1}`}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            priority={index < 4}
          />
        </div>
      ))}
    </div>
  );
}