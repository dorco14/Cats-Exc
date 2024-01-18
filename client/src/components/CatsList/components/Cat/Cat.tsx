import { FunctionComponent, Fragment } from "react";
import { useStyles } from "./style";
import type { TCat } from "../../../../types/cat";

type TCatProps = {
  cat: TCat;
}

const MICE_TITLE = 'Mice';
const DESCRIPTION_TITLE = 'Description';
const ALTERNATIVE_TITLE = 'Card Image';

export const Cat: FunctionComponent<TCatProps> = ({ cat }) => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2> {cat.firstName} {cat.lastName}</h2>
      </div>
      <img className={styles.cardImage} src={cat.image} alt={ALTERNATIVE_TITLE} />
      <div className={styles.cardContent}>
        <h3>{MICE_TITLE}</h3>
        <div>
          {
            cat.mice?.map((mouse) => <Fragment key={mouse.id}> {`${mouse.name}`} </Fragment>)
          }
        </div>
        <h3>{DESCRIPTION_TITLE}</h3>
        <p className={styles.cardDescription}>{cat.description}</p>
      </div>
    </div>
  )
};