from .user import User


def configure_api(api_manager):
    api_manager.add_resource(
        User,
        '/api/user', '/api/user/',
    )
