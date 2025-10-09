class HttpResponse:

    @property
    def success(self):
        return self._success

    @property
    def status(self):
        return self._status
    
    @property
    def data(self):
        return self._data

    def __init__(self, success: bool, status: int, data: any):
        self._success = success
        self._status = status
        self._data = data
        
class UnprocessableEntity(HttpResponse):

    @property
    def message(self):
        return self._message

    def __init__(self, success = False, status = 422, data = None):
        super().__init__(success, status, data)
        self._message = "Invalid Dimensions!\nImage must be n x n"


