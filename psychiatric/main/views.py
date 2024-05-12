from django.db import connection
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Users
import json
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned

@csrf_exempt
def sign_in_data(request):
    sign_in_data = json.loads(request.body)
    print(sign_in_data)
    try:
        sql_request_result = Users.objects.get(login = sign_in_data["login"], password = sign_in_data["password"])
    except ObjectDoesNotExist:
        return HttpResponse(json.dumps({"message" : "incorrect data"}))
    except MultipleObjectsReturned:
        return HttpResponse(json.dumps({"message" : "more than one object"}))
    return HttpResponse(json.dumps({"message" : "successful login"}))


@csrf_exempt
def sign_up_data(request):
    sign_up_data = json.loads(request.body)
    def create_account():
        sql_request_result = Users.objects.create(login = sign_up_data["login"], password = sign_up_data["password"])
        print(sql_request_result)
    try:
        sql_request_result = Users.objects.get(login = sign_up_data["login"], password = sign_up_data["password"])
        print(sql_request_result)
    except ObjectDoesNotExist:
        create_account()
        return HttpResponse(json.dumps({"message" : "successful registration"}))
    except MultipleObjectsReturned:
        pass
    print(sql_request_result[0])
    return HttpResponse(json.dumps({"message" : "account is already taken"}))
    