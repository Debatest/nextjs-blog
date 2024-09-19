import React, { JSX } from 'react';

type PostProps = {
    id?: string;
    title?: string;
    content?: string;
    date?: string;
  };
  
  export default function Post({ id = "No ID", title = "Untitled", content = "No content available", date = "No date" }: PostProps) {
    return (
      <div key={id} className="border border-gray-200 p-4 my-4">
        <h2>{title}</h2>
        <p className="text-gray-500">{date}</p>
        <p>{content}</p>
      </div>
    );
  }

