import { getAllCategories, getCategoryPosts, getPost } from "@/handlers/getMdxContent";
import { EvaluateOptions, MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ categoryId: string, itemId: string }> }) {
    const { categoryId, itemId } = await params;
    const post = await getPost(itemId, categoryId);

    if (!post) {
        notFound();
    }

    const options: EvaluateOptions = {
        parseFrontmatter: true,
    };

    return (
        <div>
            <div key={post.frontMatter.title}>
                <MDXRemote
                    source={post.content}
                    options={options}
                />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
  const categories = await getAllCategories();

  const allParams: { categoryId: string; itemId: any;}[] = [];

  for (const category of categories) {
    const posts = await getCategoryPosts(category) as Post[];
    
    posts.forEach((post) => {
      allParams.push({
        categoryId: category,
        itemId: post.frontMatter.title,
      });
    });
  }

  return allParams.map(({ categoryId, itemId }) => ({
    categoryId,
    itemId,
  }));
} 