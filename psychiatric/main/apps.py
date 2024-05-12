from django.apps import AppConfig


class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

# class MyAppConfig(AppConfig):
#     name = 'database'

#     def ready(self):
#         # Code to execute when the server starts up
#         print("Server is starting up...")
#         # Add your initialization code here