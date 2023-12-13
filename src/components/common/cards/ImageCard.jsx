import React from 'react';

const ImageCard = ({ photo }) => {
  return (
    <a
      key={photo.id}
      href={photo.url}
      target="_blank"
      className="w-full border border-dashed rounded-md hover:border-dashed hover:border-gray-400"
    >
      <img
        className="w-full h-48 rounded-t-md object-cover"
        src={photo.src.medium}
        alt={photo.alt}
      />
      <div className="p-5">
        <div className="flex flex-row items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-md">
            <span className="font-medium text-gray-600">
              {photo.photographer[0]}
            </span>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="text-lg font-medium">{photo.photographer}</h5>
            <span className="-mt-2 text-xs">Photographer</span>
          </div>
        </div>
        <p className="pt-4 text-sm font-normal text-gray-700">
          {photo.alt}
        </p>
      </div>
    </a>
  );
};

export default ImageCard;
