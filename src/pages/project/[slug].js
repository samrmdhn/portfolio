import Text from "@/components/Text";import { Box, Grid, Tooltip } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PROJECTS = [
  {
    product_name: "Gospeed",
    image: "/Gospeed2.jpg",
    client: "Sadewa Marine",
    link: "https://www.gospeed.co.id/",
    slug: "gospeed-sadewa-marine",
    type: "Professional",
    category: "E-Ticketing",
    role: "Front End Developer & Designer",
    status: "LIVE",
    stacks: [
      {
        name: "PHP",
        image: "/php.png",
        size_x: "35",
        size_y: "20",
      },
      {
        name: "Bootstrap",
        image: "/bootstrap.png",
        size_x: "20",
        size_y: "20",
      },
      {
        name: "MySQL",
        image: "/mysqll.png",
        size_x: "20",
        size_y: "20",
      },
    ],
    contributions: [
      "Initiated, brainstormed, and prototyped the project with the team from scratch.",
      "Sliced UI designs into code based on the prototype.",
      "Validated every form request before sending data to the controller/backend using JavaScript.",
      "Designed a new logo for rebranding and a portrait banner for promotional purposes.",
    ],
  },
  {
    product_name: "Dashboard",
    image: "/pertamina.jpg",
    client: "Pertamina Patra Niaga",
    link: "",
    slug: "dashboard-pertamina-patra-niaga",
    type: "Professional",
    category: "Enterprise",
    role: "UI Engineer",
    status: "OFFLINE",
    stacks: [
      {
        name: "React.js",
        image: "/react.png",
        size_x: "23",
        size_y: "20",
      },
      {
        name: "MUI",
        image: "/muii.png",
        size_x: "20",
        size_y: "20",
      },
    ],
    contributions: [
      "Initiated, brainstormed, and prototyped the project with the team from scratch.",
      "Sliced the UI design into code using a component-based approach, based on the prototype.",
    ],
  },
  {
    product_name: "IP Marketplace",
    image: "/djkiii.jpg",
    client: "Kemenkumham (DJKI)",
    link: "http://103.150.169.106/",
    slug: "ip-marketplace-djki",
    type: "Professional",
    category: "E-Commerce",
    role: "Full Stack Developer",
    status: "LIVE",
    stacks: [
      {
        name: "PHP",
        image: "/php.png",
        size_x: "35",
        size_y: "20",
      },
      {
        name: "Bootstrap",
        image: "/bootstrap.png",
        size_x: "20",
        size_y: "20",
      },
      {
        name: "MySQL",
        image: "/mysqll.png",
        size_x: "20",
        size_y: "20",
      },
    ],
    contributions: [
      "Connected app services using API.",
      "Suggested and implemented an additional feature.",
      "Fixed a major feature related to the app's business process.",
      "Fixed UI responsiveness for all devices.",
      "Fixed unused legacy code that doesn't affect the app.",
    ],
  },
  {
    product_name: "Strngrz",
    image: "/strangerz-nograd.jpg",
    client: "-",
    link: "https://strngrz-samrmdhn.vercel.app/",
    slug: "strngrz-samrmdhn",
    type: "Personal",
    category: "Clone",
    role: "Full Stack Developer",
    status: "LIVE",
    stacks: [
      {
        name: "Next.js",
        image: "/next-js.png",
        size_x: "20",
        size_y: "20",
      },
      {
        name: "MongoDB",
        image: "/mongodbb.png",
        size_x: "15",
        size_y: "20",
      },
    ],
    contributions: [
      "Initiated, brainstormed, and prototyped the project from scratch.",
      "Connected app services using the built-in Next.js API with MongoDB Atlas.",
      "Deployed the app on Vercel using Github which has been connected.",
    ],
  },
  {
    product_name: "Keluhan Vaksin",
    image: "/vaksin-nograd.jpg",
    client: "-",
    link: "https://server-vaksin-samrmdhn.vercel.app/",
    slug: "server-vaksin-samrmdhn",
    type: "Personal",
    category: "Health",
    role: "Full Stack Developer",
    status: "LIVE",
    stacks: [
      {
        name: "Next.js",
        image: "/next-js.png",
        size_x: "20",
        size_y: "20",
      },
      {
        name: "MongoDB",
        image: "/mongodbb.png",
        size_x: "15",
        size_y: "20",
      },
    ],
    contributions: [
      "Initiated, brainstormed, and prototyped the project from scratch.",
      "Connected app services using the built-in Next.js API with MongoDB Atlas.",
      "Deployed the app on Vercel using Github which has been connected.",
    ],
  },
];

export default function Project() {
  const [selectedData, setSelectedData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const {
      query: { slug },
    } = router;
    console.log(slug);

    const findData = PROJECTS.find((project) => {
      return project.slug === slug;
    });

    setSelectedData(findData);
  }, [router.isReady]);

  return (
    <div>
      <Head>
        <title>Project: {selectedData.product_name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              display="flex"
              flexDirection="column"
              padding={2}
              sx={{
                width: "450px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box marginBottom="10px">
                <button
                  style={{
                    padding: "3px 10px",
                    borderRadius: "5px",
                    border: "1px solid grey",
                    backgroundColor: "white",
                  }}
                >
                  <Link href="/" style={{ textDecoration: "none" }}>
                    Back
                  </Link>
                </button>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <Image
                  src={selectedData.image}
                  fill
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </Box>

              <Grid container>
                <Grid item md={12} xs={12} marginBottom="10px">
                  <Text
                    variant="secondary-2"
                    style={{ fontSize: "10px", marginBottom: "3px" }}
                  >
                    CLIENT
                  </Text>
                  <Text variant="primary">{selectedData.client}</Text>
                </Grid>

                <Grid item md={4} xs={4} marginBottom="10px">
                  <Text
                    variant="secondary-2"
                    style={{ fontSize: "10px", marginBottom: "3px" }}
                  >
                    STACK
                  </Text>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      marginTop: "5px",
                    }}
                  >
                    {selectedData.stacks?.map((s, index) => {
                      return (
                        <>
                          <div>
                            <Tooltip title={s.name} arrow>
                              <Image
                                width={s.size_x}
                                height={s.size_y}
                                src={s.image}
                              />
                            </Tooltip>
                          </div>
                        </>
                      );
                    })}
                  </Box>
                </Grid>

                <Grid item md={4} xs={4}>
                  <Text
                    variant="secondary-2"
                    style={{ fontSize: "10px", marginBottom: "3px" }}
                  >
                    CATEGORY
                  </Text>
                  <Text variant="primary-2">{selectedData.category}</Text>
                </Grid>

                <Grid item md={4} xs={4}>
                  <Text
                    variant="secondary-2"
                    style={{ fontSize: "10px", marginBottom: "3px" }}
                  >
                    ROLE
                  </Text>
                  <Text variant="primary-2">{selectedData.role}</Text>
                </Grid>

                <Grid item md={12} xs={12}>
                  <Text
                    variant="secondary-2"
                    style={{ fontSize: "10px", marginBottom: "3px" }}
                  >
                    CONTRIBUTION
                  </Text>
                  <ol>
                    {selectedData?.contributions?.map((c, index) => {
                      return (
                        <>
                          <li>{c}</li>
                        </>
                      );
                    })}
                  </ol>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </section>
      </main>
    </div>
  );
}
