from django.contrib import admin
from .models import advertise,category



class advertiseAdmin(admin.ModelAdmin):
        def save_model(self, request, obj, form, change):
            if obj.aprroved:
                obj.reviewed_by=request.user
                super(advertiseAdmin, self).save_model(request, obj, form, change)

        readonly_fields = ['name','reviewed_in','price','details','created_by','reviewed_by','image_1','image_2','image_3']


admin.site.register(advertise,advertiseAdmin)
admin.site.register(category)