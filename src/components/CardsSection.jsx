import React from 'react'
import JobCard from "./JobCard";


const CardsSection = ({ cards, onAdd, onDelete, onEdit }) => {
    return (
        <div className="flex-1">
            {/* Add button mobile */}
            <button
                onClick={onAdd}
                className="sm:hidden fixed bottom-6 right-6 z-10 bg-red-700 text-white px-4 py-3 rounded-full"
            >
                + Add
            </button>

            {/* Cards grid */}
            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-1
                xl:grid-cols-3
                gap-4
                ">
            {cards.map((card, index) => (
                <JobCard
                    key={index}
                    data={card}
                    onDelete={() => onDelete(index)}
                    onEdit={() => onEdit(index)}
                />

        ))}
            </div>
        </div>
    );
};


export default CardsSection