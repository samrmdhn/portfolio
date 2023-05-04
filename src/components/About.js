import { Box } from "@mui/material";import Text from "./Text";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Text variant="primary" style={{ margin: "10px 0px" }}>
        About
      </Text>

      <Text variant="primary-3">
        Interested seeing things in design perspective,
      </Text>

      <Box display="flex" alignItems="center" gap="10px">
        <Box>
          <Link href="https://www.github.com/samrmdhn" target="_blank">
            <Image src="/github.png" width="20" height="20" alt="Github" />
          </Link>
        </Box>
        <Box>
          <Link href="https://www.linkedin.com/in/samrmdhn" target="_blank">
            <Image src="/linked.png" width="20" height="20" alt="Linked" />
          </Link>
        </Box>
        <Box>
          <Link href="https://www.behance.net/samrmdhn" target="_blank">
            <Image src="/behance.png" width="20" height="20" alt="Behance" />
          </Link>
        </Box>
        <Box>
          <Link href="https://instagram.com/samrmdhn" target="_blank">
            <Image src="/instagram.png" width="20" height="20" alt="Behance" />
          </Link>
        </Box>
      </Box>
    </div>
  );
}
