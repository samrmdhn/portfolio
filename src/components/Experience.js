import { Box, Grid } from "@mui/material";
import Text from "./Text";
import Image from "next/image";
import { useState, useEffect } from "react";

const DATAS_EXPERIENCE = [
  {
    role: "Web Developer",
    company: "PT. Transtellar Inti Mitra",
    work_date: "August 2022 - May 2023",
    work_length: "9 months",
    status: "Project Based",
    image: {
      width: "40",
      height: "25",
      img: "/tim2.png",
    },
    location: "Jakarta, Indonesia",
    work_detail: [
      "Completed 3 different projects category with different technologies",
      "Collaborate with related stakeholders about app development.",
      "Initiated, brainstormed, and prototyped projects with the team from scratch.",
    ],
  },
  {
    role: "Web Developer & Data Entry",
    company: "Dinas Kesehatan Kota Bandung",
    work_date: "April 2021 - June 2021",
    work_length: "3 months",
    status: "Internship",
    image: {
      width: "20",
      height: "20",
      img: "/dinkes.png",
    },
    location: "Bandung, Indonesia",
    work_detail: [
      "Collaborate with COVID-19 team to help one distric to another distcric about data",
      "Entry COVID-19 patient's data from manual (paper) to system",
      "Create a solution ideas by making a complaints system app for patients after vaccinated with Node.js",
    ],
  },
];

export default function Experience() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(DATAS_EXPERIENCE);
  }, []);

  return (
    <div>
      <Text variant="primary" style={{ margin: "10px 0px" }}>
        Experience
      </Text>
      <Box sx={{ margin: "10px 0px" }}>
        <Grid container>
          {datas.map((data, index) => {
            return (
              <>
                <Grid md={2} xs={3} key={index}>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src={data.image.img}
                      width={data.image.width}
                      height={data.image.height}
                      alt={data.company}
                    />
                  </Box>
                </Grid>

                <Grid md={10} xs={9}>
                  <Text variant="primary" style={{ marginBottom: "2px" }}>
                    {data.role}
                  </Text>
                  <Text variant="primary-3" style={{ marginBottom: "2px" }}>
                    {data.company} <span> · {data.status}</span>
                  </Text>
                  <Text variant="secondary-2" style={{ marginBottom: "2px" }}>
                    {data.work_date} <span> · {data.work_length}</span>
                  </Text>
                  <Text variant="secondary-2" style={{ marginBottom: "10px" }}>
                    {data.location}
                  </Text>
                  <Text variant="primary-3">Contributions: </Text>
                  <Text variant="primary-3">
                    <ol>
                      {data.work_detail.map((w, index) => {
                        return (
                          <>
                            <li key={index}>{w}</li>
                          </>
                        );
                      })}
                    </ol>
                  </Text>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
