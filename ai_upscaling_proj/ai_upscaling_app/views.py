from django.http import HttpResponse
from django.shortcuts import render
from . import functions
from . import forms


def index(request):
    if request.method == "GET":
        form = forms.ImageForm()

        return render(request,"index.html",{"form":form})

    elif request.method == "POST":
        form = forms.ImageForm(request.POST,request.FILES)

        if not form.is_valid():
            return HttpResponse("Invalid form data!",status=422)

        scale = form.cleaned_data.get("scale")
        image = request.FILES["image"].read()

        result = functions.upscale(image,scale)

        return HttpResponse(result)

    return HttpResponse("Invalid request method!",status=400)