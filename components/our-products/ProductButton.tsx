"use client";

import React from "react";
import { Button } from "@/components/ui/button";


interface ProductButtonProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const ProductButton = ({ variant, className, onClick, children }: ProductButtonProps) => {
    return (
        <Button variant={variant} className={className} onClick={onClick}>{children}</Button>
    )
}

export default ProductButton
