import styles from './protocol-ui.module.css';

/* eslint-disable-next-line */
export interface ProtocolUiProps {}

export function ProtocolUi(props: ProtocolUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProtocolUi!</h1>
    </div>
  );
}

export default ProtocolUi;
