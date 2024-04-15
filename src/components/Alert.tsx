import clsx from "clsx";

interface AlertProps {
    value: string;
    color?: "warning" | "alert" | "info" | "success";
};

export const Alert = ({
    value,
    color="warning"
}: AlertProps) => {
    return (
        <span
            className={clsx("w-full my-1.5 px-2 py-1.5 rounded-md", {
                "bg-red-300 text-red-900 border border-separate border-red-800": color == "warning",
                "bg-yellow-300 text-yellow-900 border border-separate border-yellow-800": color == "alert",
                "bg-green-300 text-green-900 border border-separate border-green-800": color == "success",
                "bg-slate-300 text-slate-900 border border-separate border-slate-800": color == "info"
            })}
        >{value}</span>
    )
}