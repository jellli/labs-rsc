"use server";
import { rerender } from "waku/server";

const article = {
  title: "",
  content: "",
};

export const getData = () => {
  return {
    article,
  };
};
export const publish = (formData: FormData) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const title = formData.get("title");
      const content = formData.get("content");
      article.title = title as string;
      article.content = content as string;
      rerender("form");
      resolve({
        success: 1,
        msg: "publish success",
      });
    }, 1000);
  });
