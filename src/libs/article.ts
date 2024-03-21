"use server"
import {rerender} from 'waku/server'

const draft = {
  title: '',
  content: ''
};
const article = {
  title: '',
  content: ''
};

export const getData = () => {
  return {
    draft,
    article
  }
}
export const saveDraft = (formData: FormData) => {
  const title = formData.get('title');
  const content = formData.get('content');
  draft.title = title as string;
  draft.content = content as string;
  rerender('');
  return {
    success: 1,
    msg: 'save success'
  }
}
export const publish = (formData: FormData) => {
  console.log('p')
  const title = formData.get('title');
  const content = formData.get('content');
  article.title = title as string;
  article.content = content as string;
  rerender('');
  return {
    success: 1,
    msg: 'publish success'
  }
}