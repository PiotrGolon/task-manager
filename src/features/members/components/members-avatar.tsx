import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MemberAvatarProps {
  name: string;
  className?: string;
  fallbackClassName?: string;
}

export const MemberAvatar = ({
  fallbackClassName,
  name,
  className,
}: MemberAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "size-5 bg-neutral-200 transition border border-neutral-300 rounded-md",
        className
      )}
    >
      <AvatarFallback
        className={cn(
          "bg-neutral-200 font-medium text-neutral-500 flex items-ceter justify-center",
          fallbackClassName
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};