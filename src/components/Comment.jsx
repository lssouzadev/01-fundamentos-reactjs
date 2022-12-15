import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
       <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lssouzadev.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Souza</strong>
                            <time title="15 de Dezembro às 08:49h" dateTime="2022-12-15 08:46:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
       </div> 
    )
}