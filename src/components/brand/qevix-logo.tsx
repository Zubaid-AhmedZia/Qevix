import Image from "next/image";
import Link from "next/link";

type QevixLogoProps = {
  href?: string;
  compact?: boolean;
};

export function QevixLogo({ href = "/", compact = false }: QevixLogoProps) {
  const mark = (
    <span className="qevix-logo-mark">
      <Image
        src="/logonew.png"
        alt=""
        width={96}
        height={96}
        sizes="48px"
        priority
      />
    </span>
  );

  return (
    <Link className="brand" href={href} aria-label="QevixAi home">
      {mark}
      {compact ? null : (
        <span className="brand-word">
          <span>Qevix AI</span>
          <small>Intelligence. Automated.</small>
        </span>
      )}
    </Link>
  );
}
