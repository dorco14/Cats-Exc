import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    formLabel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    formInput: {
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        height: 30
    }
})