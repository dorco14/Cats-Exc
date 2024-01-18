import { FunctionComponent } from "react";
import { useStyles } from "./style";

type TFilterInputProps = {
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterInput: FunctionComponent<TFilterInputProps> = ({ placeholder, onChange }) => {
    const styles = useStyles();

    return (
        <div>
            <input className={styles.filter} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}