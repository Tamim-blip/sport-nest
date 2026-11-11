import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Button that navigates like a link. Base UI's Button expects a native
 * <button> by default, so rendering into an anchor requires
 * nativeButton={false} to keep correct semantics.
 */
export function ButtonLink({
  href,
  ...props
}: React.ComponentProps<typeof Button> & { href: string }) {
  return (
    <Button nativeButton={false} render={<Link href={href} />} {...props} />
  );
}
