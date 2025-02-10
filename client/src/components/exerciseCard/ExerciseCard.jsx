import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Heading, Title, LightText, ExerciseText, RepeationText } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";
import CustomModal from "../modal/CustomModal.jsx";
import RecordLogParent from "../recordLog/RecordLogParent.jsx";

const ExerciseCard = ({
  sx = {},
  setsAndReps,
  btnText,
}) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <Card
      sx={{
        backgroundColor: "#E5EEFF",
        borderRadius: "12px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
        width: "40vw",
        height: "190px",
        margin: "20px",
        ...sx
      }}
    >
      <CustomModal
      open={open}
      onClose={() => setOpen(false)}
      ><RecordLogParent exerciseId = {setsAndReps._id}/></CustomModal>
      <CardContent>
        <Title sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
          {setsAndReps.title}
        </Title>

        <div style={{paddingLeft : "20px",paddingBottom: "5px"}}>
        <ExerciseText>{ "Number of sets : " + setsAndReps.idealSets }</ExerciseText>
        <RepeationText>{ "Number of reps : " +  setsAndReps.idealReps } </RepeationText>
        </div>


        {btnText && (
          <div className="buttonContainer">
            <CustomButton sx={{width : "200px"}} onClick={openModal}>{btnText}</CustomButton>
          </div>
        )}
      </CardContent>

    </Card>
  );
}

export default ExerciseCard;