import { useContext } from "react";
import { ModalContext } from "./App";

const styles: { [k in string]: object } = {
  ghostButton: { background: 'none', color: 'white', fontSize: '24px', outline: 'none', border: 'none' },
  modalWrapper: { zIndex: 11, left: 0, top: 0, position: 'fixed', width: '100vw', height: '100vh', background: '#2c2c2c', color: 'white' },
}

export const Navigation = () => {
  // inject
  const { navigation, setNavigation } = useContext(ModalContext)

  // v-if navigation
  return !navigation ? null : (
    <section style={styles.modalWrapper}>
      <button style={styles.ghostButton} onClick={() => setNavigation(false)}>X</button>
    </section>
  );
};

export default Navigation;