import { Box, Grid, Tooltip } from "@mui/material";import Text from "./Text";
import Image from "next/image";

export default function Technologiess() {
  return (
    <div>
      <Text variant="primary" style={{ marginTop: "10px" }}>
        Stack
      </Text>

      <Grid container sx={{ marginTop: "10px" }}>
        <Grid md={6} xs={6}>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="secondary">Languages</Text>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <div>
                <Tooltip title="JavaScript" arrow>
                  <Image width="20" height="20" src="/js.png" />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="PHP" arrow>
                  <Image
                    height="20"
                    width="35"
                    src="/php.png"
                    style={{
                      filter: "grayscale(100%)",
                      position: "relative",
                    }}
                  />
                </Tooltip>
              </div>
            </Box>
          </div>
        </Grid>

        <Grid md={6} xs={6}>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="secondary">Framework/Library</Text>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <div>
                <Tooltip title="Next.js" arrow>
                  <Image width="20" height="20" src="/next-js.png" />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="React.js" arrow>
                  <Image width="23" height="20" src="/react.png" />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Express.js" arrow>
                  <Image width="20" height="20" src="/express.png" />
                </Tooltip>
              </div>
            </Box>
          </div>
        </Grid>

        <Grid md={6} xs={6}>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="secondary">CSS/Styling</Text>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <div>
                <Tooltip title="MUI" arrow>
                  <Image width="20" height="20" src="/muii.png" />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Bootstrap" arrow>
                  <Image
                    width="20"
                    height="20"
                    src="/bootstrap.png"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Tailwind" arrow>
                  <Image
                    width="20"
                    height="20"
                    src="/tailwind.png"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </Tooltip>
              </div>
            </Box>
          </div>
        </Grid>

        <Grid md={6} xs={6}>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="secondary">Databases</Text>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <div>
                <Tooltip title="MySQL" arrow>
                  <Image width="20" height="20" src="/mysqll.png" />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="MongoDB" arrow>
                  <Image width="15" height="20" src="/mongodbb.png" />
                </Tooltip>
              </div>
            </Box>
          </div>
        </Grid>

        <Grid md={6} xs={6}>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="secondary">Version Control</Text>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <div>
                <Tooltip title="Github" arrow>
                  <Image width="20" height="20" src="/github.png" />
                </Tooltip>
              </div>
            </Box>
          </div>
        </Grid>

        <Grid md={6} xs={6}>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="secondary">Deployment Host</Text>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <div>
                <Tooltip title="Vercel" arrow>
                  <Image width="20" height="20" src="/vercell.png" />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Netlify" arrow>
                  <Image width="20" height="20" src="/netlifyy.png" />
                </Tooltip>
              </div>
            </Box>
          </div>
        </Grid>

        <Grid md={6} xs={6}>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="secondary">Others</Text>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <div>
                <Tooltip title="Redux" arrow>
                  <Image width="20" height="20" src="/redux.png" />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Prisma" arrow>
                  <Image width="20" height="20" src="/prisma.png" />
                </Tooltip>
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>

      <Text variant="primary" style={{ marginTop: "10px" }}>
        Technical
      </Text>

      <Grid container sx={{ marginTop: "10px" }}>
        <Grid item md={6} sx={6}>
          <Text variant="secondary">Frontend</Text>
          <ul>
            <li>
              <Text variant="secondary-2">Flexbox</Text>
            </li>
            <li>
              <Text variant="secondary-2">Grid System</Text>
            </li>
            <li>
              <Text variant="secondary-2">Semantic Element</Text>
            </li>
            <li>
              <Text variant="secondary-2">Reusable Component</Text>
            </li>
            <li>
              <Text variant="secondary-2">Responsive Design</Text>
            </li>
            <li>
              <Text variant="secondary-2">
                Data interaction using API with HTTP Methods
              </Text>
            </li>
            <li>
              <Text variant="secondary-2">
                Client Side Rendering (CSR) & Server Side Rendering (SSR)
              </Text>
            </li>
            <li>
              <Text variant="secondary-2">Protected Routes</Text>
            </li>
            <li>
              <Text variant="secondary-2">
                Search, Filter, and Pagination (With API)
              </Text>
            </li>
          </ul>
        </Grid>
        <Grid item md={6} sx={6}>
          <Text variant="secondary">Backend</Text>
          <ul>
            <li>
              <Text variant="secondary-2">
                Database Architecture and Design
              </Text>
            </li>
            <li>
              <Text variant="secondary-2">
                Create, Read, Update, Delete (CRUD) (using ORM Prisma)
              </Text>
            </li>
            <li>
              <Text variant="secondary-2">
                REST API (with HTTP status code)
              </Text>
            </li>
            <li>
              <Text variant="secondary-2">
                Authentication & Authorization (using JWT)
              </Text>
            </li>
            <li>
              <Text variant="secondary-2">
                Search, Filter, and Pagination (using API)
              </Text>
            </li>
            <li>
              <Text variant="secondary-2">
                Role Based Access Control (RBAC)
              </Text>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
