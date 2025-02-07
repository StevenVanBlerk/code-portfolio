import { ReactNode } from "react";
import { Card, Chip, IFrame } from "src/designSystem";
import TextLink from "src/designSystem/components/navigation/TextLink";

type SampleProps = {
  name: string;
  codebaseHref?: string;
  deploymentHref?: string;
  tags?: string[];
  hasIFrame?: boolean;
  children: ReactNode;
};

const Sample = ({
  name,
  codebaseHref,
  deploymentHref,
  hasIFrame = true,
  tags = [],
  children,
}: SampleProps) => {
  return (
    <Card className="h-full w-full">
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

        {deploymentHref && hasIFrame && (
          <IFrame
            src={deploymentHref}
            title={name}
            loading="lazy"
            className="h-[350px]"
          />
        )}
      </div>
    </Card>
  );
};

export default Sample;
