import { Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'image' | 'video';
  id: number;
  label?: string;
  className?: string;
}

export default function MediaPlaceholder({ type, id, label, className = '' }: MediaPlaceholderProps) {
  const isVideo = type === 'video';
  const Icon = isVideo ? VideoIcon : ImageIcon;
  const defaultLabel = isVideo ? `[VIDEO PLACEHOLDER ${id} – PORTRAIT PRODUCT VIDEO]` : `[IMAGE PLACEHOLDER ${id} – PORTRAIT PRODUCT IMAGE]`;

  return (
    <div className={`relative flex aspect-[3/4] w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center dark:border-zinc-700 dark:bg-zinc-800/50 ${className}`}>
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-zinc-700 dark:text-gray-400">
        <Icon size={32} />
      </div>
      <p className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
        {label || defaultLabel}
      </p>
      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
        Recommended size: 1080x1440px
      </p>
    </div>
  );
}
