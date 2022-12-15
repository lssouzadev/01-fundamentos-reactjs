import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post 
            author="Leonardo Souza" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, soluta illum provident perferendis tempora perspiciatis fuga dolore neque! Dolorum, nulla quas? Dolore reprehenderit doloribus error saepe a temporibus eum numquam!"
          />
          <Post 
            author="Leticia Lima"
            content=" Clinica life a melhor de coité"
          />
        </main>
      </div>
    </div>
    
  )
}




