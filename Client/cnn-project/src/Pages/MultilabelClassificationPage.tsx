import { Button, Typography } from "@mui/material";
import CustomPage from "../components/CustomPage";
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { useEffect, useRef, useState } from "react";
import { multilabel_classification } from "../api/post";
import {Box} from "@mui/material";

export interface ServerResponse {
    prediction: string
    confidence: string
}

export default function MultilabelClassificationPage() {
    const drawing = useRef<null | ReactSketchCanvasRef> (null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [modelPrediction, setModelPrediction] = useState<string | null>(null);
    const [modelConfidence, setModelConfidence] = useState<string | null>(null);



function base64ImageToBlob(str: string) {
  // extract content type and base64 payload from original string
  var pos = str.indexOf(';base64,');
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);

  // decode base64
  var imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for(var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  var blob = new Blob([buffer], { type: type });

  return blob;
}

    const onClickClear = () => {
        if (drawing.current !== null) {
            drawing.current.resetCanvas();
            setModelConfidence(null);
            setModelPrediction(null); 
        }
    }

    useEffect(() => setIsDrawing(false), [])

    
    const handleChange = () => {
        if (drawing.current == null) {
            setIsDrawing(false);
        } else {
            setIsDrawing(true);
        }
        
    }
    
    const handleStroke = () => {
        setIsDrawing(false);
        if (drawing.current !== null) {
            drawing.current.exportImage("jpeg")
                .then((img) => {
                   // const image_file = base64ToFile(img, "character.jpeg", "image/jpeg");
                    // multilabel_classification(image_file)
                    //     .then((prediction) => {
                    //         setModelPrediction(prediction);
                        })
                }
        }

    

    const handleUpload = () => {
        if (drawing.current !== null) {
            drawing.current.exportImage("jpeg")
                .then((img) => {
                    const img_file = base64ImageToBlob(img);
                    multilabel_classification(new File([img_file], "character.jpeg"))
                        .then((response) => {
                            setModelPrediction(response.prediction)
                            const confidence = response.confidence;
                            const confidence_num = parseFloat(confidence).toFixed(2);
                            setModelConfidence(confidence_num);
                        })
                }
                    )
            }
        }
    
    return (
        <CustomPage title={`Multilabel Classification`}>
            {modelPrediction && <Typography variant="h5">{`Model prediction: ${modelPrediction}`}</Typography>}
            {modelConfidence && <Typography variant="h5">{`Model confidence: ${modelConfidence}`}</Typography>}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <ReactSketchCanvas 
                    strokeColor="black" 
                    strokeWidth={13}
                    width="300px" 
                    height="300px"
                    ref={drawing}
                    onChange={handleChange}
                    onStroke={handleStroke}
                    />
                    <Box 
                        sx={{ 
                            display: "flex",
                            justifyContent: "space-evenly",
                            mt: 2
                        }}>
                        <Button
                            sx={{m: 1}}
                            variant="contained"
                            onClick={onClickClear}
                            >
                            Clear
                            </Button>
                        <Button 
                            variant="contained" 
                            onClick={handleUpload}
                            >
                            Classify
                        </Button>
                    </Box>
 
            </Box>
            
        </CustomPage>
    )
}