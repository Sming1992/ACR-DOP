import { Users, Clock, FileText, Inbox, CheckCircle, Send, ThumbsUp } from "lucide-react";

type CardData = {
  title: string;
  count: number;
  icon: React.ElementType;
};

const cardData: CardData[] = [
    { title: "Total Leave Applications", count: 50, icon: Users },
    { title: "Pending", count: 12, icon: Clock },
    { title: "Approved", count: 35, icon: CheckCircle },
  ];

export default function LeaveStack() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="p-4 flex items-center space-x-4 rounded-2xl bg-white">
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
