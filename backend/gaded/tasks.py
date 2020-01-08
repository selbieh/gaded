from .celery import app

@app.task
def create_notification_task(id):
    from advertise.models import advertise
    from notification.models import subscribe
    from notification.models import notification
    from fcm_django.models import FCMDevice

    adv=advertise.objects.get(id=id)
    sub_users = subscribe.objects.get(category=adv.category).users.all()
    notification_list=[notification(user=user,advertise=adv,pushed=True) for user in sub_users]
    notification.objects.bulk_create(notification_list)
    fcm_devices=FCMDevice.objects.all().filter(user__in=sub_users)
    fcm_devices.send_message(data={'title': str(adv.name), 'body': str(adv.category)})



