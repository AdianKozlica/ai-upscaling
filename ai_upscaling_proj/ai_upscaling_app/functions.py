import magic
from django.conf import settings

import cv2
import numpy
import base64
import mimetypes

MODEL_PATH = settings.BASE_DIR / "models" / "EDSR_x4.pb"

def _bytes_to_mat(image:bytes):
    numpy_buffer = numpy.frombuffer(image,numpy.uint8)
    mat = cv2.imdecode(numpy_buffer,cv2.IMREAD_COLOR)

    return mat

def upscale(image:bytes,scale:int):
    mime = magic.from_buffer(image,True)
    extension = mimetypes.guess_extension(mime)

    sr = cv2.dnn_superres.DnnSuperResImpl_create()
    sr.readModel(MODEL_PATH)
    sr.setModel("edsr", scale)

    mat = _bytes_to_mat(image)
    result = sr.upsample(mat)
    retval,buffer = cv2.imencode(extension,result)
    b64 = f"data:{mime};base64," + base64.b64encode(buffer).decode()

    return b64



