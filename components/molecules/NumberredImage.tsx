import React from "react";

interface NumberedImageProps {
  number: number;
  title: string;
  items: string[];
   onButtonClick?: () => void;
}

const NumberedImage: React.FC<NumberedImageProps> = ({
  number,
  title,
  items,
   onButtonClick,
}) => {
  return (
    <div className="bg-black text-white p-6 rounded-xl w-full max-w-sm text-left">
      <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full mb-4">
        <span className="text-white font-semibold">{number.toString().padStart(2, "0")}</span>
      </div>
      <h2 className="text-[clamp(1.5rem,6vw,2.5rem)] font-bold leading-snug mb-4 whitespace-pre-line">{title}</h2>
      <ul className="mb-6 space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="text-base font-normal text-gray-300">{item}</li>
        ))}
      </ul>
      <button
        onClick={onButtonClick}
  className="px-4 py-2 text-sm font-extrabold text-white bg-transparent border border-white rounded-full hover:bg-gray-300 transition "
      >
       See more
      </button>
    </div>
  );
};

export default NumberedImage;
