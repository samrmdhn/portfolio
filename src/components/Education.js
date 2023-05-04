import { Box, Grid } from "@mui/material";
import Text from "./Text";
import Image from "next/image";
import { useState, useEffect } from "react";

const EDUCATION = [
  {
    name: "Politeknik Piksi Ganesha",
    level: "Diploma IV",
    image: {
      img: "/piksi.png",
      width: "40",
      height: "40",
    },
    concentration: "Management of Informatics",
    date: "Sept 2018 - May 2022",
    location: "Bandung, Indonesia",
    details: [
      "Graduated as Diploma (DIV)/Bachelor of Computer (S.Tr.Kom) with grade 3,62.",
    ],
  },
  {
    name: "SMAN 1 Baleendah",
    level: "High School",
    image: {
      img: "/baleendah.png",
      width: "40",
      height: "40",
    },
    concentration: "Science",
    date: "2015 - 2018",
    location: "Bandung, Indonesia",
  },
];

export default function Education() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(EDUCATION);
  }, []);

  return (
    <div>
      <Text variant="primary" style={{ margin: "10px 0px" }}>
        Education
      </Text>
      <Box sx={{ margin: "10px 0px" }}>
        <Grid container>
          {datas.map((data, index) => {
            return (
              <>
                <Grid md={2} xs={3}>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src={data.image.img}
                      width={data.image.width}
                      height={data.image.height}
                      alt={data.name}
                    />
                  </Box>
                </Grid>

                <Grid md={10} xs={9}>
                  <Text variant="primary" style={{ marginBottom: "2px" }}>
                    {data.name}
                  </Text>
                  <Text variant="primary-3" style={{ marginBottom: "2px" }}>
                    {data.level} <span> · {data.concentration}</span>
                  </Text>
                  <Text variant="secondary-2" style={{ marginBottom: "2px" }}>
                    {data.date}
                  </Text>
                  <Text variant="secondary-2" style={{ marginBottom: "10px" }}>
                    {data.location}
                  </Text>

                  {data.details?.length > 0 && (
                    <>
                      <Text variant="primary-3">
                        <ul>
                          {data.details.map((detail, index) => {
                            return (
                              <>
                                <li>{detail}</li>
                              </>
                            );
                          })}
                        </ul>
                      </Text>
                    </>
                  )}
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
