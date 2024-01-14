import { FunctionComponent } from "react";
import { useStyles } from "./style"

type TButtonProps = {
    text: string
    type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button: FunctionComponent<TButtonProps> = ({ text, type }) => {
    const styles = useStyles();
    
    return (
        <button className={styles.button} type={type}>{text}</button>
    )
}