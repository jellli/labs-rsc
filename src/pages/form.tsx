"use server";
import Form from "../components/form.js";
import { getData, publish } from "../libs/article.js";

const FormPage = () => {
  const data = getData();
  return (
    <article className="prose text-sm">
      <h2>Form</h2>
      <h3>Basic</h3>
      <pre>
        <code>{JSON.stringify(data.article, null, 2)}</code>
      </pre>
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
