import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    button: {
        marginTop: '1%',
        height: '50px',
        width: '5%',
        marginBottom: '1%',
        marginLeft: '1%',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '50px',
        cursor: 'pointer',
        color: '#fff',
        border: 'none',
        backgroundColor: '#3498db',
        '&:hover': {
            backgroundColor: '#2980b9',
        },
        '&:active': {
            backgroundColor: '#1f618d',
        },
    }
})