from flask_restful import Resource


class User(Resource):
    """User API."""

    def get(self, id=None):
        """Get method."""
        return "GET_METHOD"

    def post(self):
        """Post method."""
        return "POST_METHOD"

    def put(self, id):
        """Put method."""
        return "PUT_METHOD"

    def patch(self, id):
        """Patch method."""
        return "PATCH_METHOD"

    def delete(self, id):
        """Delete method."""
        return "DELETE_METHOD"
