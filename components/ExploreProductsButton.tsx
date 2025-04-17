"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useRouter } from 'next/navigation';

interface ExploreProductsButtonProps {
  text: string;
  target: string;
}

const ExploreProductsButton: React.FC<ExploreProductsButtonProps> = ({ text, target }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(target);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="w-full sm:w-auto rounded-full text-base shadow-none"
      onClick={handleClick}
    >
      <ArrowDown className="!h-5 !w-5" /> {text}
    </Button>
  );
};

export default ExploreProductsButton;