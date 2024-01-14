import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    cardContainer: {
        flex: 1,
        marginTop: '3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    errorText: {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '10%',
        marginBottom: '10%',
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
    },
    spinner: {
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid #3498db',
        width: '120px',
        height: '120px',
        animation: '$spin 2s linear infinite',
    },
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    },
})