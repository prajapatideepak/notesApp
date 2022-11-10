import React from "react";
import Link from "next/link";

export default function Page() {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note : ${i}` }));

  return (
    <div>
      <h1>Notes List</h1>

      <div>
        {notes.map((note) => {
          return (
            <div>
            <Link key={note.id} href={"notes/[id]"} as={`notes/${note.id}`}>
              {note.title} 
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
