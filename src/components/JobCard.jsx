import React from 'react'
import { SquarePen } from "lucide-react";

const JobCard = ({ data, onDelete, onEdit }) => {
  return (
    <div
      className="
      min-w-67.5
      max-w-87
      relative
      bg-white
      rounded-xl
      p-4
      shadow
      flex
      flex-col
      items-center
      justify-center
      gap-2
    "
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="w-30 h-30 rounded-full object-cover object-center overflow-hidden">
          <img className="w-full" src={data.imageUrl} alt="" />
        </div>
        <div>
          <p className="text-2xl font-semibold">{data.userName}</p>
        </div>
      </div>

      <p className="font-medium">Job Role : {data.role}</p>
      <p>
        Time Zone :{" "}
        <span className="text-sm text-gray-700 bg-gray-200 rounded p-1">
          {data.timeType}
        </span>
      </p>
      <p className="text-sm text-gray-600 capitalize">{data.desc}</p>

      <p
  className="absolute top-2 right-2 cursor-pointer"
  onClick={onEdit}
>
  <SquarePen size={18} />
</p>

      <button
        onClick={onDelete}
        className="
        px-3 
        py-2 
        rounded-lg 
        bg-red-500
        active:scale-95
        ">
        Remove
      </button>
    </div>
  );
};

export default JobCard;