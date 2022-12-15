import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lssouzadev.png',
      name: 'Leonardo Souza',
      role: 'Student'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
                  
    ],
    publishedAt: new Date('2022-12-15 12:14:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lssouzadev.png',
      name: 'Leticia Lima',
      role: 'Cirurgiã Dentista'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
                  
    ],
    publishedAt: new Date('2022-12-10 12:14:00')
  },
];

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




