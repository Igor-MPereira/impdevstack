import styles from './reformed.module.css';

/* eslint-disable-next-line */
export interface ReformedProps {}

export function Reformed(props: ReformedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Reformed!</h1>
    </div>
  );
}

export default Reformed;
