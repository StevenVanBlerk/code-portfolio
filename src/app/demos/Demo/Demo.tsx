import { ReactNode } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { Card } from "@/designSystem";

type DemoProps = {
  name: string;
  codebaseHref?: string;
  deploymentHref?: string;
  screenshotSrc?: string;
  children: ReactNode;
};

const Demo = ({
  name,
  codebaseHref,
  deploymentHref,
  screenshotSrc,
  children,
}: DemoProps) => {
  return (
    <Card>
      <header>
        <h2>{name}</h2>
      </header>
      {deploymentHref && <Link href={deploymentHref}>Deployment</Link>}
      {codebaseHref && <Link href={codebaseHref}>Codebase</Link>}
      {screenshotSrc && (
        <NextImage
          src={screenshotSrc}
          alt={`${name} screenshot`}
          width={600}
          height={300}
        />
      )}
      {children}
    </Card>
  );
};

export default Demo;
