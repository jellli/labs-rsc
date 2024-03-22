"use server";
import { Suspense } from "react";
import Form from "../components/form.js";
import { getData, publish } from "../libs/article.js";

const FormData = async () => {
  const data = await getData();
  return (
    <pre>
      <code>{JSON.stringify(data.article, null, 2)}</code>
    </pre>
  );
};

const FormPage = () => {
  return (
    <article className="prose text-sm">
      <h2>Form</h2>
      <h3>Basic</h3>
      <Suspense fallback="loading...">
        <FormData />
      </Suspense>
      <Form onSubmit={publish} />
    </article>
  );
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};

export default FormPage;
