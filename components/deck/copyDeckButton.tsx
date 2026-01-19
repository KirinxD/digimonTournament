"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface Props {
  deckList: { id: string; qty: number }[];
}

export const CopyDeckButton = ({ deckList }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    // Transformamos el mazo al formato: "4 BT16-102"
    const text = deckList.map((item) => `${item.qty} ${item.id}`).join("\n");

    navigator.clipboard.writeText(text);

    // Feedback visual
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-2 bg-zinc-900 border-2 border-zinc-700 px-4 py-2 hover:border-yellow-500 hover:text-yellow-500 transition-all group"
    >
      {copied ? (
        <>
          <Check size={14} className="text-green-500" />
          <span className="text-[10px] text-green-500">DECK_COPIED!</span>
        </>
      ) : (
        <>
          <Copy
            size={14}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-[10px]">EXPORT_LIST</span>
        </>
      )}
    </button>
  );
};
