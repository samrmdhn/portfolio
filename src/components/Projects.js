import { Box, Grid, Tooltip } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import Text from "./Text";
import Select from "react-select";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

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
  },
];

const CATEGORY = [
  { label: "All", value: "All" },
  { label: "Professional", value: "Professional" },
  { label: "Personal", value: "Personal" },
];

export default function Projects() {
  const [datas, setDatas] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setDatas(PROJECTS);
    setCategory(CATEGORY);
  }, []);

  const handleCategory = (selected) => {
    if (selected.value === "All") {
      setDatas(PROJECTS);
    } else {
      const filteredDatas = PROJECTS.filter((data) => {
        return data.type === selected.value;
      });

      setDatas(filteredDatas);
    }
  };
  return (
    <div>
      <Box margin="10px 0px">
        <Select options={category} onChange={handleCategory} />
      </Box>

      {datas?.map((data, index) => {
        return (
          <div key={data.name}>
            <div style={{ position: "relative" }}>
              {data.link !== "" && (
                <>
                  <Box position="absolute" right="15px" top="15px">
                    <Link href={data?.link} target="_blank">
                      <OpenInNewIcon
                        sx={{
                          fontSize: "14px",
                          cursor: "pointer",
                          color: "grey",
                        }}
                      />
                    </Link>
                  </Box>
                </>
              )}
              <Link
                href={`/project/${data.slug}`}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Box
                  sx={{
                    marginBottom: "10px",
                    border: "1px solid #e8e8e8",
                    borderRadius: "10px",
                    zIndex: "1",
                  }}
                >
                  <div>
                    <Grid container sx={{ height: "100%" }}>
                      <Grid item xs={6}>
                        <Box
                          style={{
                            position: "relative",
                            height: "100%",
                          }}
                        >
                          <Image
                            priority
                            alt={`Image ${index}`}
                            src={data.image}
                            fill
                            style={{
                              borderTopLeftRadius: "10px",
                              borderBottomLeftRadius: "10px",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ padding: 2 }}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Box>
                              <Box display="flex" alignItems="center" gap="5px">
                                <Box>
                                  <Text
                                    variant="primary-3"
                                    style={{ fontWeight: "bolder" }}
                                  >
                                    {data.product_name}
                                  </Text>
                                </Box>
                                <Box
                                  border={
                                    data.status === "LIVE"
                                      ? "1px solid green"
                                      : "1px solid grey"
                                  }
                                  borderRadius="5px"
                                  padding="3px"
                                >
                                  <Text
                                    variant="secondary-3"
                                    style={{
                                      color:
                                        data.status === "LIVE"
                                          ? "green"
                                          : "grey",
                                    }}
                                  >
                                    {data.status}
                                  </Text>
                                </Box>
                              </Box>
                            </Box>
                          </Box>

                          <Box sx={{ marginBottom: "10px", marginTop: "10px" }}>
                            <Text variant="secondary-3">ROLE</Text>
                            <Text variant="primary-4">{data.role}</Text>
                          </Box>

                          <Box sx={{ marginBottom: "10px" }}>
                            <Text variant="secondary-3">CLIENT</Text>
                            <Text variant="primary-4">{data.client}</Text>
                          </Box>

                          <Box sx={{ marginBottom: "10px" }}>
                            <Text variant="secondary-3">CATEGORY</Text>
                            <Text variant="primary-4">{data.category}</Text>
                          </Box>

                          {/* <Box sx={{ marginBottom: "10px" }}>
                      <Text variant="secondary-3">TYPE</Text>
                      <Text variant="primary-4">{data.type}</Text>
                    </Box> */}

                          <Text variant="secondary-3">STACK</Text>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "7px",
                              marginTop: "5px",
                            }}
                          >
                            {data.stacks?.map((s, index) => {
                              return (
                                <div key={index}>
                                  <Tooltip title={s.name} arrow>
                                    <Image
                                      width={s.size_x}
                                      height={s.size_y}
                                      src={s.image}
                                      alt={s.name}
                                    />
                                  </Tooltip>
                                </div>
                              );
                            })}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
