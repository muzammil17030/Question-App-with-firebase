import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { getData } from "../config/FireBaseMethods";

interface QuestionData {
  UserName: string;
  EmailAddress: string;
  description: string;
}

function SingleQuestion() {
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        if (id) {
          const res = await getData("questions", id);
          setQuestion(res as QuestionData);
        }
      } catch (err) {
        console.error("Error fetching question:", err);
      }
    };

    fetchQuestion();
  }, [id]);

  return (
    <Box className='container rounded shadow text-light' style={{ backgroundColor: 'black' }}>
      <Box className='py-4'>
        <Box>
          <p className="text-center ">
            <span className="display-5   fw-bold">{question?.UserName || 'User'}</span>
          </p>
          <p>Are you? <span>{question?.EmailAddress || 'Email not available'}</span></p>
          <textarea
            className="form-control"
            disabled
            value={question?.description || ''}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SingleQuestion;