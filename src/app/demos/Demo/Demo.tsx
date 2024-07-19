import { ReactNode } from "react";
import NextImage from "next/image";
import { Card } from "@/designSystem";
import TextLink from "@/designSystem/components/navigation/TextLink";

type DemoProps = {
  name: string;
  codebaseHref?: string;
  deploymentHref?: string;
  previewSrc?: string;
  children: ReactNode;
};

const Demo = ({
  name,
  codebaseHref,
  deploymentHref,
  previewSrc,
  children,
}: DemoProps) => {
  return (
    <Card>
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

      <div className="mt-4">{children}</div>

      {previewSrc && deploymentHref && (
        <TextLink
          href={deploymentHref}
          openInNewTab
          className="mx-auto my-4 px-8"
        >
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
    </Card>
  );
};

export default Demo;
