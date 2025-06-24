// src/components/BackButton.tsx
'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`flex items-center gap-2 text-sm font-medium ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      Back to all rooms
    </button>
  );
}