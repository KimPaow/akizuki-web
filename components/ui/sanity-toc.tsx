import slugify from "slugify";
import { Link } from "./link";
import { ContentPageQueryResult } from "@/sanity/types";

// Define the type for the Headings
export type Headings = NonNullable<ContentPageQueryResult>["headings"];

// Define the type for each node in the tree structure
type TreeNode = {
  text: string;
  slug: string;
  children?: TreeNode[];
};

export function nestHeadings(headings: Headings): TreeNode[] {
  const treeNodes: TreeNode[] = [];
  const stack: { node: TreeNode; level: number }[] = [];

  headings?.forEach((block) => {
    if (!block.style || !block.children) return;

    const level = parseInt(block.style.replace("h", ""), 10);

    const text =
      block.children.map((child) => child.text || "").join(" ") || "Untitled";

    const treeNode: TreeNode = {
      slug: slugify(text),
      text,
      children: [],
    };

    while (stack.length > 0) {
      const topStack = stack[stack.length - 1];

      if (topStack && topStack.level < level) break;

      stack.pop();
    }

    if (stack.length > 0) {
      const parentNode = stack[stack.length - 1]?.node;
      if (parentNode && !parentNode.children) {
        parentNode.children = [];
      }
      parentNode?.children?.push(treeNode);
    } else {
      treeNodes.push(treeNode);
    }

    stack.push({ node: treeNode, level });
  });

  return treeNodes;
}

export function TableOfContents({
  elements,
  level = 1,
  filter = 2,
}: {
  elements: TreeNode[];
  level?: number;
  filter?: number;
}) {
  return (
    <ul>
      {elements.map((el) => (
        <li key={el.text}>
          <Link href={`#${el.slug}`} underline color="primary">
            {el.text}
          </Link>
          {el.children && level < filter && (
            <TableOfContents elements={el.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}
