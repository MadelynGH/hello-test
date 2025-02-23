'use client'

import styles from "./page.module.css";
import { useState } from "react";
import { inter } from "./ui/fonts";
const complete = new Audio("/complete.mp3"); 

function ListItem({ title, items, updateItems }) {
  const [checked, toggle] = useState(false);

  function handleChange(e) {
    toggle(!checked);
    if (!checked) {
      complete.play();
    }
  }

  return (
    <div style={{
      // borderTop: (items.indexOf(title) == 0) ? "1px solid lightgray" : "none",
      // borderBottom: "1px solid lightgray",
      padding: "10px",
      width: "85vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "25px",
      marginBottom: "25px",
      fontWeight: "400",
      fontSize: "1.2em",
      borderRadius: "25px"
    }} className={styles.dropShadow}>
      <div>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <p style={{
          display: "inline",
          margin: "10px"
        }} className={checked ? styles.checked : styles.notChecked}>{title}</p>
      </div>
      <button className={styles.trashButton} onClick={() => {
        let newItems = items.slice();
        newItems.splice(newItems.indexOf(title), 1);
        updateItems(newItems);
      }}>&#128465;</button>
    </div>
  );
}

function AddTask({ items, updateItems }) {
  const [text, changeText] = useState("");
  const [message, changeMessage] = useState("");

  return (
    <div className={styles.addTask}>
      <input type="text" value={text} onChange={e => {
        changeText(e.target.value);
      }} onFocus={() => changeMessage("")} className={inter.className} />

      <button style={{
        borderRadius: "50px",
        width: "30px",
        height: "30px",
        alignContent: "center",
        fontSize: "1.7em"
      }} onClick={() => {
        if (text && items.indexOf(text) == -1) {
          const newItems = [...items, text];
          updateItems(newItems)
        } else if (text) {
          changeMessage(`Your list already contains the item "${text}". Please choose a different name.`);
        } else {
          changeMessage("Please enter something into the text box.")
        }
        changeText("");
      }} ><span>+</span></button>

      <p style={{
        color: "#00b899",
        fontWeight: "700"
      }}>{message}</p>
    </div>
  );
}

export default function App() {
  const [items, updateItems] = useState([]);

  return (
    <>
      <h1 className={styles.heading}>To Do</h1>
      <div style={{
        overflow: "auto",
        height: "60vh"
      }}>
        {items.map(title => {
          return <ListItem key={title} title={title} items={items} updateItems={updateItems} />;
        })}
      </div>
      <AddTask items={items} updateItems={updateItems} />
    </>
  );
}
