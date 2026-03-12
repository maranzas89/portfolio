import { MessageSquare } from "lucide-react";

type AskWenButtonProps = {
  onClick: () => void;
};

export default function AskWenButton({ onClick }: AskWenButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-gray-200/80 bg-gray-50/60 px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-muted transition-all duration-200 hover:border-gray-300 hover:bg-gray-100/80 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-1 shrink-0"
      aria-label="Open Ask Wen chat"
    >
      <MessageSquare className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      Ask Wen
    </button>
  );
}
