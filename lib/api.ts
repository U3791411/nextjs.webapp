import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Markdown Directory
const markdownDirectory = path.join(process.cwd(), '_markdown');

export function getSortedByDateData() {
    // Get File Names Under /_markdown
    const fileNames = fs.readdirSync(markdownDirectory);
    const markdownData = fileNames.map(fileName => {
        // Remove .md Extension From File Name To Get Slug
        const slug = fileName.replace(/\.md$/, '');
        // Read Markdown File As String
        const fullPath = path.join(markdownDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter To Pass Post Metadata
        const matterResult = matter(fileContents);
        // Combine Data With Slug
        return {
            slug,
            ...(matterResult.data as { title: string; date: string })
        }
    })
    // Sort Post By Date
    return markdownData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    });
}

// Get All Post Slug
export function getAllPostSlug() {
    const fileNames = fs.readdirSync(markdownDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        }
    });
}

// Get Post Data
export async function getMarkdownData(slug: string) {
    const fullPath = path.join(markdownDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter To Pass Post Metadata
    const matterResult = matter(fileContents);
    // Use Remark To Convert Markdown Into HTML String
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine Data w/ The Slug and contentHtml
    return {
        slug,
        contentHtml,
        ...(matterResult.data as { title: string; date: string })
    }
}
