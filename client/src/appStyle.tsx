import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    app: {
        textAlign: 'center'
    },
    appHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    }
})