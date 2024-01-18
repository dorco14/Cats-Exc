import { RouterProvider } from 'react-router-dom';
import { useStyles } from './appStyle';
import { CatsProvider } from './contexts/cats.context';
import { router } from './router';

export const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.app}>
      <CatsProvider>
        <RouterProvider router={router} />
      </CatsProvider>
    </div>
  );
}