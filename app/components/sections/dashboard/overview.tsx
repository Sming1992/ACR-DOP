
type CardData = {
  title: string;
  count: number;
};

const cardData: CardData[] = [
  { title: "Employee registered", count: 120,  },
  { title: "Employee transferred", count: 15,  },
  { title: "Divisions created", count: 10, },
  { title: "Leaves accepted", count: 8, },
];

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="p-4 flex items-center space-x-4  rounded-2xl bg-white">
          <div>
            <p className="text-gray-500 text-sm">{card.title}</p>
            <p className="text-2xl font-bold">{card.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
