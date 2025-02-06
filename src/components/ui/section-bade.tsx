import React from 'react'

interface Props {
    title: string;
}

export const SectionBadge = ({ title }: Props) => {
    return (
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
            <div className="bg-[linear-gradient(110deg,#2563eb,45%,#93c5fd,55%,#2563eb)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
                {title}
            </div>
        </div>
    )
};
