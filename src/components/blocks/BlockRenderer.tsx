import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Image from "next/image";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

interface BlockRendererProps {
  blocks: any[];
}

const fontSizeMap: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};

const fontWeightMap: Record<string, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const textTransformMap: Record<string, string> = {
  none: "",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};

const textAlignMap: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const spacerHeightMap: Record<string, string> = {
  xs: "h-4",
  sm: "h-8",
  md: "h-16",
  lg: "h-24",
  xl: "h-32",
};

const colorBlockHeightMap: Record<string, string> = {
  sm: "h-[100px]",
  md: "h-[200px]",
  lg: "h-[300px]",
  xl: "h-[400px]",
  full: "h-screen",
};

const paddingMap: Record<string, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-8",
  lg: "p-12",
};

export function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="flex flex-col gap-0">
      {blocks.map((block, index) => {
        switch (block._type) {
          case "imageBlock":
            return <ImageBlock key={block._key || index} block={block} />;
          case "textBlock":
            return <TextBlock key={block._key || index} block={block} />;
          case "linkBlock":
            return <LinkBlock key={block._key || index} block={block} />;
          case "headingBlock":
            return <HeadingBlock key={block._key || index} block={block} />;
          case "colorBlock":
            return <ColorBlock key={block._key || index} block={block} />;
          case "spacerBlock":
            return <SpacerBlock key={block._key || index} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function ImageBlock({ block }: { block: any }) {
  const imageUrl = block.image ? urlFor(block.image)?.url() : null;
  const backgroundColor = block.backgroundColor || "transparent";

  const content = (
    <div
      className="w-full relative"
      style={{ backgroundColor }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={block.caption || ""}
          width={1200}
          height={800}
          className="w-full h-auto"
          sizes="100vw"
          priority={false}
        />
      )}
      {block.caption && (
        <p className="text-sm mt-2 px-4 pb-4">{block.caption}</p>
      )}
    </div>
  );

  if (block.link) {
    return (
      <a href={block.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}

function TextBlock({ block }: { block: any }) {
  const fontSize = block.fontSize && fontSizeMap[block.fontSize] ? fontSizeMap[block.fontSize] : "text-base";
  const fontWeight = block.fontWeight && fontWeightMap[block.fontWeight] ? fontWeightMap[block.fontWeight] : "font-normal";
  const textTransform = block.textTransform && textTransformMap[block.textTransform] !== undefined ? textTransformMap[block.textTransform] : "";
  const textAlign = block.textAlign && textAlignMap[block.textAlign] ? textAlignMap[block.textAlign] : "text-left";
  const backgroundColor = block.backgroundColor || "transparent";

  return (
    <div
      className={`w-full p-8 ${fontSize} ${fontWeight} ${textTransform} ${textAlign}`.trim()}
      style={{ backgroundColor }}
    >
      {block.content && <PortableText value={block.content} />}
    </div>
  );
}

function LinkBlock({ block }: { block: any }) {
  const backgroundColor = block.backgroundColor || "transparent";

  return (
    <div
      className="w-full p-8 hover:opacity-90 transition-opacity"
      style={{ backgroundColor }}
    >
      <a
        href={block.url}
        target={block.openInNewTab ? "_blank" : "_self"}
        rel={block.openInNewTab ? "noopener noreferrer" : ""}
        className="block"
      >
        <h3 className="text-xl font-bold mb-2">{block.title}</h3>
        {block.description && <p className="text-sm">{block.description}</p>}
      </a>
    </div>
  );
}

function HeadingBlock({ block }: { block: any }) {
  const HeadingTag = (block.level || "h2") as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const fontSize = block.fontSize && fontSizeMap[block.fontSize] ? fontSizeMap[block.fontSize] : "text-2xl";
  const fontWeight = block.fontWeight && fontWeightMap[block.fontWeight] ? fontWeightMap[block.fontWeight] : "font-bold";
  const textTransform = block.textTransform && textTransformMap[block.textTransform] !== undefined ? textTransformMap[block.textTransform] : "";
  const textAlign = block.textAlign && textAlignMap[block.textAlign] ? textAlignMap[block.textAlign] : "text-left";
  const backgroundColor = block.backgroundColor || "transparent";

  return (
    <div
      className={`w-full p-8 ${textAlign}`}
      style={{ backgroundColor }}
    >
      <HeadingTag className={`${fontSize} ${fontWeight} ${textTransform}`.trim()}>
        {block.text}
      </HeadingTag>
    </div>
  );
}

function ColorBlock({ block }: { block: any }) {
  const height = block.height && colorBlockHeightMap[block.height] ? colorBlockHeightMap[block.height] : "h-[200px]";
  const padding = block.padding && paddingMap[block.padding] ? paddingMap[block.padding] : "p-8";
  const backgroundColor = block.backgroundColor || "#000000";

  return (
    <div
      className={`w-full ${height} ${padding}`.trim()}
      style={{ backgroundColor }}
    />
  );
}

function SpacerBlock({ block }: { block: any }) {
  const height = block.height && spacerHeightMap[block.height] ? spacerHeightMap[block.height] : "h-16";

  return <div className={`w-full ${height}`.trim()} />;
}
