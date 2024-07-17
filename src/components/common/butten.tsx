import { IButtonProps } from "@/models/elemntHtml";

function Button({children,className,...props}:IButtonProps) {
    return ( <button className={`${className} rounded-lg text-white px-6 py-2 shadow `} {...props}>{children}</button> );
}

export default Button;