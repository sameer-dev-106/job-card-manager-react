import { useEffect, useState } from "react";
import Form from "./components/Form";
import CardsSection from "./components/CardsSection";
import FormModal from "./components/FormModal";

const App = () => {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("jobCards");
    return saved ? JSON.parse(saved) : [];
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const isMobile = window.innerWidth < 640;

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("jobCards", JSON.stringify(cards));
  }, [cards]);

  const addCard = (formData) => {
    setCards((prev) => [...prev, formData]);
    setEditIndex(null);
    setIsFormOpen(false);
  };

  const deleteCard = (index) => {
    setCards((prev) => prev.filter((_, i) => i !== index));
  };

  const editCard = (index) => {
    setEditIndex(index);

    if (isMobile) {
      setIsFormOpen(true);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateCard = (updatedData) => {
    setCards((prev) =>
      prev.map((card, index) => (index === editIndex ? updatedData : card))
    );
    setEditIndex(null);
    setIsFormOpen(false);
  };

  return (
    <main className="min-h-screen bg-gray-200">
      <section className="p-4 sm:flex sm:gap-4">
        {/* Desktop Form */}
        <div className="hidden sm:block sm:w-120">
          <Form
            onAddCard={addCard}
            onUpdateCard={updateCard}
            editData={editIndex !== null ? cards[editIndex] : null}
          />
        </div>

        {/* Cards */}
        <CardsSection
          cards={cards}
          onAdd={() => setIsFormOpen(true)}
          onDelete={deleteCard}
          onEdit={editCard}
        />
      </section>

      {/* Mobile Modal */}
      {isFormOpen && isMobile && (
        <FormModal onClose={() => setIsFormOpen(false)}>
          <Form
            onAddCard={addCard}
            onUpdateCard={updateCard}
            editData={editIndex !== null ? cards[editIndex] : null}
          />
        </FormModal>
      )}
    </main>
  );
};

export default App;
