from django.contrib import admin
from .models import LionUser
from .models import MgmtUser
# Register your models here.

admin.site.register(LionUser)
admin.site.register(MgmtUser)