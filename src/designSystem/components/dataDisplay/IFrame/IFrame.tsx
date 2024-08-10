import TextLink from "../../navigation/TextLink";

interface IFrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  title: string;
  wrapperClassName?: string;
  className?: string;
}

const IFrame = ({
  src,
  title,
  wrapperClassName = "",
  className = "",
  ...iFrameProps
}: IFrameProps) => {
  return (
    <div className={`overflow-hidden rounded-md ${wrapperClassName}`}>
      <TextLink
        className="w-full bg-light-charcoal p-2 text-base"
        href={src}
        openInNewTab
      >
        {src}
      </TextLink>

      <iframe
        className={`w-full rounded-md rounded-t-none border border-light-charcoal ${className}`}
        src={src}
        title={title}
        {...iFrameProps}
      />
    </div>
  );
};

export default IFrame;
