type frontMatter = {
  title: string;
  date: Date;
  category: string;
}

interface Post {
  content: string;
  frontMatter: frontMatter
}

interface filePost {
  id: string; // Title of the Post
  category: string;
}