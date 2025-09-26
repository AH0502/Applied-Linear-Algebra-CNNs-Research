from pydantic import BaseModel
from fastapi import UploadFile

class ImageFile(BaseModel):
    file: UploadFile