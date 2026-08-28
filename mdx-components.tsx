import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ComponentType, ImgHTMLAttributes } from 'react';

const NextImage = defaultMdxComponents.img as ComponentType<
  ImgHTMLAttributes<HTMLImageElement>
>;

/**
 * Fumadocs maps `img` to next/image, which requires explicit dimensions for
 * remote URLs. Markdown images never carry them, so fall back to a plain `img`
 * unless both are present.
 */
function Image({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  if (props.width === undefined || props.height === undefined) {
    return <img {...props} className={['rounded-lg', className].filter(Boolean).join(' ')} />;
  }

  return <NextImage {...props} className={className} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: Image,
    ...components,
  };
}
