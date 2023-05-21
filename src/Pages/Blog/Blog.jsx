import React from "react";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <h1 className="text-xl text-white font-bold bg-slate-800 p-2">
        What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>
      <hr />
      <p className="text-slate-400 border px-2 my-4">
        Refresh Token is a unique token that is used to obtain additional access
        tokens. We create an access token and store it in the local storage or
        session or cookie for authentication purpose. We know that Access tokens
        aren’t valid for an extended period due to security reasons. A refresh
        token helps to re-authenticate a user without login information. This
        Refresh token is never exposed to the client-side Javascript, even if
        our access token gets compromised it’ll be expired in a very short
        duration. So, we will be sending two tokens instead of one, an access
        token and a refresh token. The access token will contain all the user
        information and will be stored in Javascript runtime, but the refresh
        token will be stored securely in an HTTP-only cookie. Thus using Refresh
        tokens is a more secure way for authentication in web applications.
      </p>
      <h1 className="text-xl text-white font-bold bg-slate-800 p-2">
        Compare SQL and NoSQL databases.
      </h1>
      <hr />
      <p className="text-slate-400 border px-2 my-4">
        SQL and noSQL Database are two different approach for implementing a
        Database management system. SQL Database are older historically and they
        work through some query language aka SQL or structured query language.
        SQL Databases are relational where they have database-table-row-column
        structure. NoSQL databases are a bit different. NoSQL Databases have A
        collection of documents like an SQL database has a table with rows. Each
        Documents in NoSQL contains JSON like object with key-value like pair
        which are known as fields and values. However, SQL databases are
        relational and noSQL are non-relational. NoSQL database are more
        flexible and they are horizontally scalable where SQL databases are
        vertically scalable. NoSQL databases are not suitable for complex
        queries. In conclusion, Both of these database management system has
        their pros and cons.
      </p>
      <h1 className="text-xl text-white font-bold bg-slate-800 p-2">
        What is express js? What is Nest JS?
      </h1>
      <hr />
      <p className="text-slate-400 border px-2 my-4">
        Express JS is a Node Framework which helps us make server side in JS and
        Nest JS is also another back-end Framework like express but it uses
        Typescript. Nest JS uses Controllers, Providers and Modules to design
        the back-end.
      </p>
      <h1 className="text-xl text-white font-bold bg-slate-800 p-2">
        What is MongoDB aggregate and how does it work?
      </h1>
      <hr />
      <p className="text-slate-400 border px-2 my-4">
        MongoDB aggregate lets us choose specific documents based on the filter
        query and then sort or group them, which means with Aggregate
        Functionality we can aggregate documents in MongoDB by passing them
        though different stages like matching/filter, sort and group etc. Such
        as if we want to choose documents with a field named `title` the value
        of which is `Ms.` and we want to sort those documents' `age` field by
        ascending order then we can not do it with just find() or sort() method.
        Aggregation helps us here by writing code with $match and $sort.
      </p>
    </div>
  );
};

export default Blog;
