import Image from 'next/image';
import PhotoGrid from '../components/PhotoGrid';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center p-4 bg-white border-b border-gray-200">
        <div className="mr-6 mb-4 md:mb-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Logo"
            width={150}
            height={150}
            className="rounded-full border-2 border-pink-500 p-1"
          />
        </div>
        
        <div className="flex-1">
          <h1 className="text-2xl font-bold">ted_thavisin</h1>
          <p className="text-gray-500 my-2">unc 2027</p>
          
          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <span className="font-bold block">8</span>
              <span> posts</span>
            </div>
            <div className="text-center">
              <span className="font-bold block">775</span>
              <span> followers</span>
            </div>
            <div className="text-center">
              <span className="font-bold block">814</span>
              <span> following</span>
            </div>
          </div>
        </div>
      </div>
      
      <PhotoGrid />
      
      <div className="mt-4 text-center">
        <a href="/" className="text-blue-600 hover:underline">
          Go to Home Page
        </a>
      </div>
    </div>
  );
}