import "@/styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components";
import Script from "next/script";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={satoshi.variable}>
            <head>
                <Script id="reb2b-tracking" strategy="afterInteractive">
                    {`!function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=true;reb2b.methods=["identify","collect"];reb2b.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/Q6J2RHMKG06D.js.gz";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("Q6J2RHMKG06D");}();`}
                </Script>
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-satoshi overflow-x-hidden !scrollbar-hide",
                    inter.variable
                )}
            >
                <Toaster
                    richColors
                    theme="dark"
                    position="top-right"
                />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
