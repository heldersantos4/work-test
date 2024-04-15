import clsx from "clsx";

type SXType = "title" | "section" | "subtitle" | "paragraph";

interface TypoProps {
    sx: SXType;
    children: React.ReactNode;
    className?: string;
};

export const Typograph = ({
    sx,
    children,
    className
}: TypoProps) => {
    switch (sx) {
        case "title":
            return <h1 className={clsx("text-3xl font-bold my-4", className)}>{children}</h1>
            break;
        case "subtitle":
            return <h2 className={clsx("text-2xl font-semibold my-2", className)}>{children}</h2>
            break;
        case "section":
            return <h3 className={clsx("text-xl font-semibold my-1", className)}>{children}</h3>
            break;
        default:
            return <p className={clsx("text-base", className)}>{children}</p>
            break;
    }
}