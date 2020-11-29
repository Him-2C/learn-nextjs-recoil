import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TextInput from '../components/TextInput';
import CharacterCount from '../components/CharacterCount';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TextInput />
        <CharacterCount />
        <TodoList />
      </main>
    </div>
  );
}
