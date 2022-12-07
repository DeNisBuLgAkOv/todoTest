import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";


export default function Home() {

  const router = useRouter()
  const navigateTodo =(way:string)=>()=>{
    router.push(way)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo</title>
        <meta name="description" content="todo" />
      </Head>

      <main className={styles.main}>
        <button onClick={navigateTodo(`/todo`)}>Move to TodoList</button>
      </main>

    </div>
  )
}
