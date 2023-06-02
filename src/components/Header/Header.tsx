import { useState } from 'react'
import { HeaderProps } from './types';
import styles from './Header.module.css'

const Header = (props: HeaderProps) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const { score } = props;

  return (
    <>
    <div className={styles.mobileHeaderContainer}>
      <h2 className={styles.quizTitle}>Quiz App</h2>
      <p className={styles.playerScore}>Score: {score}</p>
    </div>
    </>
  )
}

export default Header;