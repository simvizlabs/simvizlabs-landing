"use client";

import * as React from "react";
import { countries } from "countries-list";
import { Check, ChevronsUpDown } from "lucide-react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { cn } from "@/lib/utils";

const countryList = Object.entries(countries).map(([code, data]) => ({
    code,
    name: data.name,
}));

interface CountrySelectorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export function CountrySelector({ value, onChange, className }: CountrySelectorProps) {
    const [query, setQuery] = React.useState("");

    const filteredCountries =
        query === ""
            ? countryList
            : countryList.filter((country) =>
                country.name.toLowerCase().includes(query.toLowerCase())
            );

    const selectedCountry = countryList.find((c) => c.name === value) || null;

    return (
        <div className={cn("relative w-full", className)}>
            <Combobox
                value={selectedCountry}
                onChange={(country) => {
                    if (country) onChange(country.name);
                }}
            >
                <div className="relative">
                    <ComboboxInput
                        className={cn(
                            "w-full h-14 rounded-2xl border border-neutral-200 px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-neutral-50/30 text-left",
                            "placeholder:text-neutral-400"
                        )}
                        displayValue={(country: any) => country?.name || ""}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search country..."
                    />
                    <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <ChevronsUpDown className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                    </ComboboxButton>
                </div>

                <ComboboxOptions
                    className={cn(
                        "absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    )}
                >
                    {filteredCountries.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-neutral-700">
                            Nothing found.
                        </div>
                    ) : (
                        filteredCountries.map((country) => (
                            <ComboboxOption
                                key={country.code}
                                value={country}
                                className={({ focus, selected }) =>
                                    cn(
                                        "relative cursor-default select-none py-3 pl-10 pr-4 rounded-xl",
                                        focus ? "bg-[#1381e5] text-white" : "text-neutral-900"
                                    )
                                }
                            >
                                {({ selected, focus }) => (
                                    <>
                                        <span className={cn("block truncate", selected ? "font-semibold" : "font-normal")}>
                                            {country.name}
                                        </span>
                                        {selected ? (
                                            <span
                                                className={cn(
                                                    "absolute inset-y-0 left-0 flex items-center pl-3",
                                                    focus ? "text-white" : "text-[#1381e5]"
                                                )}
                                            >
                                                <Check className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </ComboboxOption>
                        ))
                    )}
                </ComboboxOptions>
            </Combobox>
        </div>
    );
}
