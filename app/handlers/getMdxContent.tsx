"use server"

import path from "path";
import fs from "fs";
import { getFrontmatter } from "next-mdx-remote-client/utils"

const contentPath = path.join(process.cwd(), "app", "content")

export async function getAllPosts() {
  const categories = fs.readdirSync(contentPath);

  let allPosts: filePost[] = []

  for (const category of categories) {
    searchPosts(allPosts, category);
  }

  return allPosts;
}


export async function getCategoryPosts(category: string) {
  const categoryPath = path.join(contentPath, category);
  if (!fs.existsSync(categoryPath)) return null;
  const categoryFiles = fs
    .readdirSync(categoryPath)
    .filter((file) => file.endsWith(".mdx"));

  let allPosts: Post[] = [];

  const posts = categoryFiles.map((file) => {
    const filePath = path.join(categoryPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const frontMatter = getFrontmatter<frontMatter>(fileContent).frontmatter;
    return { content: fileContent, frontMatter };
  })

  allPosts = [...allPosts, ...posts];

  return allPosts;
}


export async function getAllCategories() {
  const categories = fs.readdirSync(contentPath);

  let allCategories = []

  for (const category of categories) {
    allCategories.push(category);
  }

  return allCategories;
}

function searchPosts(allPosts: filePost[], categoryPath: string) {
  if (!fs.existsSync(categoryPath)) return null;
  const fileNames = fs.readdirSync(categoryPath);

  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    return { id, category: categoryPath };
  })

  allPosts = [...allPosts, ...posts];

  return allPosts;
}

export async function getPost(id: string, category: string) {
  const filePath = path.join(contentPath, category, `${id}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const frontMatter = getFrontmatter<frontMatter>(fileContent).frontmatter;
  const post = { content: fileContent, frontMatter }

  return post;
}