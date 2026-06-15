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
        src="/qevix_logo_exact_high_quality_4x-Photoroom.png"
        alt=""
        width={2400}
        height={2400}
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
