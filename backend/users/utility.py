from twilio.rest import Client
import datetime
import binascii
import os


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
    account_sid = 'AC3dbaf1f47f1566a44f4531bb4ed28c4a'
    auth_token = '6f197c2a44381e88f851e71b8a90a865'
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