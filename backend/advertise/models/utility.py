import shutil
from django.conf import settings

def user_directory_path_1(instance, filename):
    try:
        shutil.rmtree(settings.LOCAL_STATIC_CDN_PATH + '/media/advertise/{0}/1/'.format(instance.name,filename.replace(" ", "")))
    except:
        pass
    return 'advertise/{0}/1/{1}/'.format(instance.name,filename.replace(" ", ""))

def user_directory_path_2(instance, filename):
    try:
        shutil.rmtree(settings.LOCAL_STATIC_CDN_PATH + '/media/advertise/{0}/2/'.format(instance.name,filename.replace(" ", "")))
    except:
        pass
    return 'advertise/{0}/2/{1}/'.format(instance.name,filename.replace(" ", ""))
def user_directory_path_3(instance, filename):
    try:
        shutil.rmtree(settings.LOCAL_STATIC_CDN_PATH + '/media/advertise/{0}/3/'.format(instance.name,filename.replace(" ", "")))
    except:
        pass
    return 'advertise/{0}/3/{1}/'.format(instance.name,filename.replace(" ", ""))
