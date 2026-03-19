import { Compass } from "lucide-react";

type AskWenButtonProps = {
  onClick: () => void;
};

export default function AskWenButton({ onClick }: AskWenButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-gray-200/80 bg-gray-50/60 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-muted transition-all duration-200 cursor-pointer hover:border-blue-400 hover:bg-gray-50/60 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-1 shrink-0"
      aria-label="Explore Wen's Work"
    >
      <Compass className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-colors duration-200 group-hover:text-blue-500" />
      Explore Wen&apos;s Work
    </button>
  );
}
