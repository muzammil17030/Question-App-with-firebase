import { useEffect, useState } from "react";
import { delData, getData } from "../config/FireBaseMethods";
import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BAbutton from "../components/BAbutton";
function AllQuestions() {
  const [allQuestions, setAllQuestions] = useState<any>([]);

  const navigate = useNavigate();

  const showQuestions = () => {
    getData("questions")
      .then((res: any) => {
        setAllQuestions([...res]);
      })
      .catch((err: any) => {
        alert(err);
      });
  };
  useEffect(() => {
    showQuestions();
  }, []);

  const deleteFunc = (uid: any) => {
    delData("questions", uid).then(() => {
      showQuestions();
    });
  };

  return (
    <>
      <Box className="container p-3 bg-black" >
        {allQuestions &&
          Array.isArray(allQuestions) &&
          allQuestions.length > 0 &&
          allQuestions.map((x, i) => (
            <Paper
              className="p-4 text-light  bg-black  m-3"
              key={i}
            >
              <Typography className="fs-4  fw-bold ">{x.description}</Typography>
              <Box className="my-3">
                <Box>
                  {/* <BAbutton btnValue="Edit" /> */}
                </Box>
                <Box>
                  <BAbutton
                    btnValue="View Details"
                    clicking={() => {
                      navigate(`/allquestions/${x.uid}`);
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <BAbutton
                  btnValue="Delete"
                  colors="error"
                  clicking={() => deleteFunc(x.uid)}
                />
              </Box>
            </Paper>
          ))}
      </Box>
    </>
  );
}

export default AllQuestions;
