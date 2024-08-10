import { ReactNode } from "react";
import NextImage from "next/image";
import { Card, Chip } from "@/designSystem";
import TextLink from "@/designSystem/components/navigation/TextLink";

type SampleProps = {
  name: string;
  codebaseHref?: string;
  deploymentHref?: string;
  previewSrc?: string;
  tags?: string[];
  children: ReactNode;
};

const Sample = ({
  name,
  codebaseHref,
  deploymentHref,
  previewSrc,
  tags = [],
  children,
}: SampleProps) => {
  return (
    <Card>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <header>
            <h2>{name}</h2>
          </header>

          <div className="mx-auto grid w-fit grid-cols-2 gap-6">
            {deploymentHref && (
              <TextLink hasExternalLinkIcon href={deploymentHref} openInNewTab>
                Deployment
              </TextLink>
            )}
            {codebaseHref && (
              <TextLink hasExternalLinkIcon href={codebaseHref} openInNewTab>
                Repository
              </TextLink>
            )}
          </div>

          <div className="grid h-full grid-cols-1 justify-between">
            <div className="mt-4">{children}</div>
          </div>
        </div>

        {tags.length > 0 && (
          <ul className="mx-auto flex h-fit w-full flex-wrap justify-center gap-1">
            {tags.map((tag) => (
              <li key={tag} className="h-fit">
                <Chip>{tag}</Chip>
              </li>
            ))}
          </ul>
        )}

        {previewSrc && deploymentHref && (
          <TextLink href={deploymentHref} openInNewTab>
            <NextImage
              src={previewSrc}
              alt={`${name} preview`}
              width={0}
              height={0}
              sizes="100%"
              className="h-auto w-full rounded-md"
            />
          </TextLink>
        )}
      </div>
    </Card>
  );
};

export default Sample;
