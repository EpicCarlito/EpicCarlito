import { getAllCategories, getCategoryPosts } from "@/handlers/getMdxContent";
import { EvaluateOptions, MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  const posts = await getCategoryPosts(categoryId);
  
  if (!posts) {
    notFound();
  }

  const options: EvaluateOptions = {
    parseFrontmatter: true,
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.frontMatter.title}>
          <MDXRemote
            source={post.content}
            options={options}
          />
        </div>
      ))}
    </div>
  )
}

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map((category) => ({
    categoryId: category
  }))
} 