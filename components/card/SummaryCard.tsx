import {
  ArrowDown,
  ArrowUp,
  Landmark,
  Users,
  CircleArrowOutUpRight,
  TrendingUp,
  Info,
  PackagePlus,
  PackageMinus,
  IndianRupee,
} from "lucide-react";
import { useRouter } from "next/navigation";

type SummaryCardProps = {
  data: Data;
  setActiveCard?: (name: string) => void;
  activeCard?: string;
};

type Data = {
  name: string;
  value: string;
  href?: string;
};

const SummaryCard = ({ data, activeCard, setActiveCard }: SummaryCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (data.href) router.push(data.href);
    else setActiveCard(data.name);
  };

  return (
    <div
      className={`cursor-pointer border rounded-lg p-4 space-y-1 ${
        activeCard === data.name
          ? "border-indigo-500 bg-violet-50"
          : "border-gray-300 hover:border-indigo-500"
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className={`flex items-center gap-1 `}>
          {/* <Icon size={16} /> */}
          <span className="text-sm capitalize">{data.name}</span>
        </div>
        <CircleArrowOutUpRight size={16} className="text-gray-300" />
      </div>

      <div className="font-medium flex items-center ">
        <IndianRupee size={15} />
        <span className="block">{data.value}</span>
      </div>
    </div>
  );
};

export default SummaryCard;
