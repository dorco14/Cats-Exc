import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from './style';
import { useCats } from "../../contexts/cats.context";
import { Button } from "../common/components/Button";

const ADD_CAT_TEXT = 'Add Cat';
const DESCRIPTION_TEXT = 'Description';
const IMAGE_TEXT = 'Image';
const LAST_NAME_TEXT = 'Last Name';
const FIRST_NAME_TEXT = 'First Name';

export const AddCat = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const styles = useStyles();
    const store = useCats();

    const handleFirstNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }, []);

    const handleLastNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }, []);

    const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    }, []);

    const handleDescriptionChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }, []);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newCat = {
            firstName: firstName,
            lastName: lastName,
            image: image,
            description: description,
            mice: []
        }
        await store.actions.addCat(newCat);
        navigate('/');
    }, [firstName, lastName, image, description]);

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.formLabel}>
                {FIRST_NAME_TEXT}
                <input className={styles.formInput} type="text" value={firstName} onChange={handleFirstNameChange} required />
            </label>
            <label className={styles.formLabel}>
                {LAST_NAME_TEXT}
                <input className={styles.formInput} type="text" value={lastName} onChange={handleLastNameChange} required />
            </label>

            <label className={styles.formLabel}>
                {IMAGE_TEXT}
                <input className={styles.formInput} type="text" value={image} onChange={handleImageChange} required />
            </label>
            <label className={styles.formLabel}>
                {DESCRIPTION_TEXT}
                <input className={styles.formInput} type="text" value={description} onChange={handleDescriptionChange} required />
            </label>
            <Button type={'submit'} text={ADD_CAT_TEXT} />
        </form>
    );
};