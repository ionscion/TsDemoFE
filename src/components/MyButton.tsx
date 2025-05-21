// src/components/MyButton.tsx
import { type JSX } from 'react';

interface MyButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function MyButton({
  label,
  onClick,
  disabled = false,
}: MyButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {label}
    </button>
  );
}
