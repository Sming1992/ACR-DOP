import { Users, Clock, FileText, Inbox, CheckCircle, Send, ThumbsUp } from "lucide-react";

type CardData = {
  title: string;
  count: number;
  icon: React.ElementType;
};

const cardData: CardData[] = [
  { title: "Total Applications", count: 120, icon: Users },
  { title: "ACR/APR Forwarded", count: 15, icon: Send },
  { title: "Total Leave Application", count: 10, icon: FileText },
  { title: "Total Section Created", count: 8, icon: Inbox },
  { title: "Section Mapped", count: 5, icon: CheckCircle },
  { title: "Leaves Approved", count: 3, icon: ThumbsUp },
  
];

export default function AcrAprGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="p-4 flex items-center space-x-4  rounded-2xl bg-white">
          <card.icon className="w-10 h-10 text-[#23538F]" />
          <div>
            <p className="text-gray-500 text-sm">{card.title}</p>
            <p className="text-2xl font-bold">{card.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


