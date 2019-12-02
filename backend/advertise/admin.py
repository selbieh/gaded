from django.contrib import admin
from .models import advertise,category



class advertiseAdmin(admin.ModelAdmin):

        def get_readonly_fields(self, request, obj=None):
            if request.user.is_superuser:
                return []
            else:
                return self.readonly_fields + ('reviewed_by','number_of_viewer','image_1','image_2','image_3','created_by',)
        def save_model(self, request, obj, form, change):
            if obj.aprroved:
                obj.reviewed_by=request.user
                super(advertiseAdmin, self).save_model(request, obj, form, change)
            else:
                super(advertiseAdmin, self).save_model(request, obj, form, change)


admin.site.register(advertise,advertiseAdmin)
admin.site.register(category)