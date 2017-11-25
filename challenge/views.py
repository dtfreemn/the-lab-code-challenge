# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import JsonResponse
from challenge.models import Company

def index(request):
  comp_obj = Company.objects.all()[0]
  name = comp_obj.name
  company = {"name": name}
  return JsonResponse(company)


