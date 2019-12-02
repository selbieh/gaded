from .celery import app

@app.task
def create_notification_task(id):
    from advertise.models import advertise
    from notification.models import subscribe
    from notification.models import notification

    adv=advertise.objects.get(id=id)
    sub_users = subscribe.objects.get(category=adv.category).users.all()
    notification_list=[notification(user=user,advertise=adv) for user in sub_users]
    notification.objects.bulk_create(notification_list)



