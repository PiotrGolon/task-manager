import { differenceInDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { changeColorByDiffDays } from "../utils";

interface TaskDateProps {
  value: string;
  className?: string;
}

export const TaskDate = ({ value, className }: TaskDateProps) => {
  const today = new Date();
  const endDate = new Date(value);
  const diffInDays = differenceInDays(endDate, today);

  const textColor = changeColorByDiffDays(diffInDays);

  return (
    <div className={textColor}>
      <span className={cn("truncate", className)}>{format(value, "PPP")}</span>
    </div>
  );
};
