from twilio.rest import Client
import datetime
import binascii
import os
from gaded.secretsUtility import  get_secret



def hahsOtp(otp):
    symbiole=['!','@','#','$','&',"^"]
    letter=["G",'h','L','T','n','X']
    password=''

    for s,l,o in zip(symbiole,letter,str(otp)):
        password=password+s+l+o
    return password



def dehash(password):
    symbiole=['!','@','#','$','&',"^"]
    letter=["G",'h','L','T','n','X']
    for cha in symbiole+letter:
        password=password.replace(cha,'')
    return password



# OTP SMS Handle

def sndOtpSms(mobile,otp):
    account_sid = get_secret('SENDSMS_ACCOUNT_SID')
    auth_token = get_secret('SENDSMS_AUTH_TOKEN')
    client = Client(account_sid, auth_token)

    message = client.messages \
        .create(
        body="otp is{}".format(otp),
        from_='+12089532127',
        to='+2'+str(mobile)
    )
    return message.sid


print(repr(datetime.datetime.now()))


def generate_token_key():
    return binascii.hexlify(os.urandom(20)).decode()